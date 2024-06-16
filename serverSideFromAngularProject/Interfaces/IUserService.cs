using ServerSide.Models;

namespace ServerSide.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
    }
}