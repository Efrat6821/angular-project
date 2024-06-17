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
        [HttpGet("filed")]
        public ActionResult<List<Job>> GetJobsByField(string filed)
        {
            return Ok(_jobService.GetJobsByFiled(filed));
        }
        [HttpGet("area")]
        public ActionResult<List<Job>> GetJobsByArea(string area, string filed)
        {
            return Ok(_jobService.GetJobsByArea(area, filed));
        }
    }
}