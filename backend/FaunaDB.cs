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


        public async Task<Topic> ReturnTopics()
        {
            Value result = await client.Query(Get(Documents(Collection("topics"))));
            Topic topic = result.At("data").To<Topic>().Value;
            return topic;
        }
    }


    public class Topic
    {
        [FaunaField("name")]
        public string Name { get; set; }

        [FaunaConstructor]
        public Topic(string name)
        {
            Name = name;
        }
    }
}