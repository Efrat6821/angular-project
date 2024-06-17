using System.Collections.Generic;
using System.Text.Json;
using ServerSide.Interfaces;
using ServerSide.Models;

namespace ServerSide.Services
{
    public class UserService : IUserService
    {
        private readonly string _filePath = "Data/User.json";

        public List<User> Users { get; }

        public UserService(IWebHostEnvironment webHost)
        {
            this._filePath = Path.Combine(webHost.ContentRootPath, "Data", "User.json");
            using (var jsonFile = File.OpenText(_filePath))
            {
                Users = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
                  new JsonSerializerOptions
                  {
                      PropertyNameCaseInsensitive = true
                  });
            }
        }
        private void saveToFile()
        {
            File.WriteAllText(_filePath, JsonSerializer.Serialize(Users));
        }

        public List<User> GetUsers() => Users;

        public User Authenticate(string username, string password)
        {
            User user = Users.FirstOrDefault(u => u.Username == username && u.Password == password);
            return user;
        }

        public void UpdateCountSendCV(int userId)
        {
            User user = Users.FirstOrDefault(u => u.Id == userId);
            user.CountSendCV++;
            saveToFile();
        }
        public void UpdateSendCVList(int userId, int jobId)
        {
            User user = Users.FirstOrDefault(u => u.Id == userId);
            if(user == null)
            {
                throw new Exception($"User with Id {userId} not found");
            }

            if(user.SendCVList == null)
            {
                user.SendCVList = new List<int>();
            }

            user.SendCVList.Add(jobId);
            saveToFile();
        }


    }
}