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
        static readonly string ENDPOINT = "https://db.eu.fauna.com";
        // NOTE: use the correct endpoint for your database's Region Group.
        static readonly string SECRET = System.Environment.GetEnvironmentVariable("FAUNADB_SECRET")!;
        FaunaClient client = new FaunaClient(SECRET, ENDPOINT);
        public Topic topic;


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
                Success: values => {
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

        
    }


    public class Topic
    {
        [FaunaField("name")]
        public string Name { get; set; }
        public string Id { get; set; }
        [FaunaConstructor]
        public Topic(string name)
        {
            Name = name;
        }
    }
  

    public class Thread
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public long datetime { get; set; }
        public User user { get; set; }
        public Thread(string id, string name, string authorname, string authorid, long datetime)
        {
            this.Id = id;
            this.Name = name;

            this.user = new User(authorid, authorname);
            this.datetime = datetime;
        }

    }

    public class Message
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public long datetime { get; set; }
        public User user { get; set; }
        public Message(string id, string text, string authorname, string authorid, long datetime)
        {
            this.Id = id;
            this.Text = text;

            this.user = new User(authorid, authorname);
            this.datetime = datetime;
        }
    }

    public class User
    {
        public string userid { get; set; }
        public string username { get; set; }

        public User(string userid, string username)
        {
            this.userid = userid;
            this.username = username;
        }
    }
}


public class JsonConstructor
{
    public Dictionary<string, object> jsonData = new Dictionary<string, object>()
        {
            {"status", "succsess" }
        };

    public JsonConstructor(object elements)
    {
        jsonData["object"] = elements;
    }
}