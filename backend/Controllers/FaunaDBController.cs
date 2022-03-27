using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using FaunaDB.Types;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/community")]
    public class FaunaDBController : ControllerBase
    {
        [HttpGet("topics")]
        public async Task<object> GetTopics()
        {
            FaunaDB fauna = new FaunaDB();

            List<Topic> topics = await fauna.ReturnTopics();
            JsonConstructor jsonData = new JsonConstructor(topics);
            return jsonData.jsonData;
        }

        [HttpGet("threads")]
        public async Task<object> GetThreads([FromQuery(Name = "topicId")] string id)
        {
            FaunaDB fauna = new FaunaDB();
            var data = await fauna.ReturnThreads(id);


            JsonConstructor jsonData = new JsonConstructor(data);
            return jsonData.jsonData;
        }

        [HttpGet("thread")]
        public async Task<object> GetThread([FromQuery(Name = "id")] string id)
        {
            FaunaDB fauna = new FaunaDB();
            var thread = await fauna.ReturnSingleThread(id);
            JsonConstructor jsonData = new JsonConstructor(thread);
            return jsonData.jsonData;
        }

        [HttpGet("messages")]
        public async Task<object> GetMessages([FromQuery(Name = "threadId")] string id)
        {
            FaunaDB fauna = new FaunaDB();
            var data = await fauna.ReturnMessages(id);
            JsonConstructor jsonData = new JsonConstructor(data);
            return jsonData.jsonData;
        }

        [HttpPost("messages")]
        public async Task<object> WriteMessage([FromBody] JsonElement jsondata)
        {
            MessageJsonDecoder data = JsonSerializer.Deserialize<MessageJsonDecoder>(jsondata);
            FaunaDB fauna = new FaunaDB(data.secret);
            Message result = await fauna.WriteMessage(data.data["threadId"], data.data["text"]);
            JsonConstructor json = new JsonConstructor(result);
            return json.jsonData;
            
        }
    }


}