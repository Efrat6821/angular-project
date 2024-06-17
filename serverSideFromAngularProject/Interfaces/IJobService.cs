using System.Collections.Generic;
using ServerSide.Models;

namespace ServerSide.Interfaces
{
    public interface IJobService
    {
        public List<Job> GetJobs();
        public List<Job> GetJobsByFiled(string filed);
        public List<Job> GetJobsByArea(string area, string filed);

    }
}