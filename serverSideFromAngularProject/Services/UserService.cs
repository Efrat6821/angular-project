using System.Collections.Generic;
using System.Text.Json;
using ServerSide.Interfaces;
using ServerSide.Models;

namespace ServerSide.Services
{
    public class UserService : IUserService
    {
        private readonly string _filePath = "Data/User.json";

        public List<User> users { get; }

        public UserService(IWebHostEnvironment webHost)
        {
            this._filePath = Path.Combine(webHost.ContentRootPath, "Data", "User.json");
            using (var jsonFile = File.OpenText(_filePath))
            {
                users = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
                  new JsonSerializerOptions
                  {
                      PropertyNameCaseInsensitive = true
                  });
            }
        }

        public List<User> GetUsers() => users;

        public User Authenticate(string username, string password)
        {
            List<User> users = GetUsers();
            User user = users.FirstOrDefault(u => u.Username == username && u.Password == password);
            return user;
        }
    }
}