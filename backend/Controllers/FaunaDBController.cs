using Microsoft.AspNetCore.Mvc;
using FaunaDB.Types;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FaunaDBController : ControllerBase
    {
        [HttpGet("topics")]
        public async Task<Topic> GetTopics()
        {
            FaunaDB fauna = new FaunaDB();
            Topic topic = await fauna.ReturnTopics();
            return topic;
        }
    }
}