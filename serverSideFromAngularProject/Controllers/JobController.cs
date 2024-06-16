using Microsoft.AspNetCore.Mvc;
using ServerSide.Interfaces;
using ServerSide.Models;

namespace ServerSide.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class JobsController : ControllerBase
    {
        IJobService _jobService;

        public JobsController(IJobService jobService)
        {
            _jobService = jobService;
        }

        [HttpGet]
        public ActionResult<List<Job>> GetJobs()
        {
            return Ok(_jobService.GetJobs());
        }
    }
}