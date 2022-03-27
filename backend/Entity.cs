using FaunaDB.Client;
using FaunaDB.Types;

using static FaunaDB.Query.Language;
namespace backend
{
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

        public Thread(string id, string name, string authorid, long datetime)
        {
            this.Id = id;
            this.Name = name;

            this.user = new User(authorid);
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
        public User(string userid)
        {
            this.userid = userid;
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

public class MessageJsonDecoder
{
    public string secret { get; set; }
    public Dictionary<string, string> data { get; set; }
}

