using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using FaunaDB.Types;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/discussions")]
    public class FaunaDBController : ControllerBase
    {
        [HttpGet("topics")]
        public async Task<object> GetTopics()
        {
            FaunaDB fauna = new FaunaDB();

            List<Topic> topics = await fauna.ReturnTopics();

            /*Dictionary<string, Dictionary<string, Topic>> topicsJson = new Dictionary<string, Dictionary<string, Topic>>();

            topicsJson["object"] = new Dictionary<string, Topic>();
            for (int i = 0; i < topics.Count; i++)
            {
                topicsJson["object"][i.ToString()] = topics[i];

            }*/
            JsonConstructor jsonData = new JsonConstructor(topics);
            return jsonData.jsonData;
        }

        [HttpGet("thread")]
        public async Task<object> GetThreads([FromQuery(Name = "id")] string id)
        {
            FaunaDB fauna = new FaunaDB();
            var data = await fauna.ReturnThreads(id);


            JsonConstructor jsonData = new JsonConstructor(data);
            return jsonData.jsonData;
        }

        [HttpGet("message")]
        public async Task<object> GetMessages([FromQuery(Name = "threadId")] string id)
        {
            FaunaDB fauna = new FaunaDB();
            var data = await fauna.ReturnMessages(id);
            JsonConstructor jsonData = new JsonConstructor(data);
            return jsonData.jsonData;
        }

        [HttpPost("message")]
        public async Task WriteMessage([FromBody] JsonElement jsondata)
        {
            MessageJsonDecoder data = JsonSerializer.Deserialize<MessageJsonDecoder>(jsondata);
            FaunaDB fauna = new FaunaDB(data.SECRET);
            var result = await fauna.WriteMessage(data.data["threadId"], data.data["text"]);
            Console.WriteLine(data.data["threadId"]);
            Console.WriteLine(data.data["text"]);
            Console.WriteLine(result);

        }
    }


}