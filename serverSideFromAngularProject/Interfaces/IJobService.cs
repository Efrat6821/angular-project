using System.Collections.Generic;
using ServerSide.Models;

namespace ServerSide.Interfaces
{
    public interface IJobService
    {
        public List<Job> GetJobs();
    }
}