using Microsoft.AspNetCore.Mvc;
using ServerSide.Interfaces;
using ServerSide.Models;

namespace ServerSide.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("authenticate")]
        public ActionResult<User> Authenticate(string username, string password)
        {
            var user = _userService.Authenticate(username, password);

            if (user == null)
                return Unauthorized();

            return Ok(user);
        }
        [HttpPut("updateCountSendCV")]
        public ActionResult<int> UpdateCountSendCV(int useId)
        {
            _userService.UpdateCountSendCV(useId);
            return Ok();
        }

        [HttpPut("UpdateSendCVList")]
        public ActionResult<int> UpdateSendCVList(int useId, int jobId)
        {
            _userService.UpdateSendCVList(useId, jobId);
            return Ok();
        }
    }
}