using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using FaunaDB.Client;
using FaunaDB.Types;

using static FaunaDB.Query.Language;
namespace backend
{
    class FaunaDB
    {
        public string ENDPOINT = "https://db.eu.fauna.com";
        // NOTE: use the correct endpoint for your database"s Region Group.
        public string SECRET = System.Environment.GetEnvironmentVariable("FAUNADB_SECRET")!;
        FaunaClient client;
        //public Topic topic;


        public async Task<List<Topic>> ReturnTopics()
        {
            Value result = await client.Query(
                Map(
                    Paginate(
                        Documents(Collection("topics"))
                    ),
                    Lambda(
                        "topicRef",
                        Get(Var("topicRef"))
                    )
                )
            );
            IResult<Value[]> data = result.At("data").To<Value[]>();
            List<Topic> topics = new List<Topic>();

            data.Match(
                Success: values =>
                {
                    foreach (Value value in values)
                    {
                        RefV valueRef = (RefV)value.At("ref");
                        Console.WriteLine(valueRef.Id);
                        topics.Add(value.At("data").To<Topic>().Value);
                        topics[^1].Id = valueRef.Id;
                    }
                },
                Failure: reason => Console.WriteLine($"Something went wrong: {reason}")
            );
            Console.WriteLine(topics);
            return topics;
        }


        public async Task<object> ReturnThreads(string topicId)
        {
            Value result = await client.Query(
                Call(Function("getThreads"), topicId)
            //"327135066980352192"
            );
            IResult<Value[]> data = result.At("data").To<Value[]>();
            List<Thread> threads = new List<Thread>();
            data.Match(
                Success: values =>
                {
                    foreach (Value value in values)
                    {
                        ObjectV thread = (ObjectV)value;
                        ObjectV author = (ObjectV)thread.At("author");

                        Thread threadData = new Thread((string)thread.At("id"), (string)thread.At("name"), (string)author.At("username"), (string)author.At("id"), (long)thread.At("datetime"));
                        threads.Add(threadData);
                    }
                },
                Failure: reason => Console.WriteLine($"Something went wrong: {reason}")
                );
            return threads;
        }

        public async Task<Thread> ReturnSingleThread(string id)
        {
            Value result = await client.Query(
                Get(Ref(Collection("threads"), id))
                );
            ObjectV data = (ObjectV)result.At("data");
            RefV authorid = (RefV)data.At("author");
            Value author = await client.Query(
                Get(Ref(Collection("users"), authorid.Id))
                );
            Console.WriteLine(author.At("data"));
            Thread thread = new Thread(id, (string)data.At("name"), (string)((ObjectV)author.At("data")).At("username"), authorid.Id, (long)result.At("ts"));
            return thread;
        }

        public async Task<object> ReturnMessages(string threadid)
        {
            Value result = await client.Query(
               Call(Function("getMessages"), threadid)
           //"327135066980352192"
           );
            IResult<Value[]> data = result.At("data").To<Value[]>();
            List<Message> messages = new List<Message>();
            data.Match(
                Success: values =>
                {
                    foreach (Value value in values)
                    {
                        Console.WriteLine(value);
                        ObjectV author = (ObjectV)value.At("author");
                        Message msg = new Message((string)value.At("id"), (string)value.At("text"), (string)author.At("username"), (string)author.At("id"), (long)value.At("datetime"));
                        messages.Add(msg);
                    }
                },
                Failure: reason => Console.WriteLine($"Something went wrong: {reason}")
                );
            return messages;
        }

        public async Task<Object> WriteMessage(string threadId, string text)
        {
            Object result = await client.Query(
                Let(
                    "userId", Select(Arr("id"), CurrentIdentity()),
                    "message", Create(
                        Collection("messages"),
                        Obj(
                            "data", Obj(
                                "thread", Ref(Collection("threads"), threadId),
                                "user", Ref(Collection("users"), Var("userId")),
                                "text", text
                            )
                        )
                    ),
                    "id", Select(Arr("ref", "id"), Var("message")),
                    "text", Select(Arr("data", "text"), Var("message")),
                    "datetime", Select(Arr("ts"), Var("message")),
                    "object", Obj(
                        "id", Var("id"),
                        "datetime", Var("datetime"),
                        "user", Obj(
                            "id", Var("userId"),
                            "username", Select(
                            Arr("data", "username"),
                            Get(Ref(Collection("users"), Var("userId")))
                        )
                    ),
                    "text", Var("text")
                )
            ).In(Var("object")));
            return result;

        }

        public FaunaDB()
        {
            client = new FaunaClient(this.SECRET, this.ENDPOINT);
        }

        public FaunaDB(string secret)
        {
            this.SECRET = secret;
            client = new FaunaClient(this.SECRET, this.ENDPOINT);
        }
    }
}


