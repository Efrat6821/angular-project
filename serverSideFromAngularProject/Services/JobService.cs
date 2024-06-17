using System.Collections.Generic;
using System.Text.Json;
using ServerSide.Interfaces;
using ServerSide.Models;

namespace ServerSide.Services
{
    public class JobService : IJobService
    {
        private readonly string _filePath = "Data/Job.json";

        public List<Job> jobs { get; }

        public JobService(IWebHostEnvironment webHost)
        {
            _filePath = Path.Combine(webHost.ContentRootPath, "Data", "Job.json");
            using (var jsonFile = File.OpenText(_filePath))
            {
                jobs = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
            }
        }

        public List<Job> GetJobs() => jobs;
        public List<Job> GetJobsByFiled(string filed) => jobs.Where(j => j.Filed == filed).ToList();
        public List<Job> GetJobsByArea(string area, string filed) => jobs.Where(j => j.JobArea == area && j.Filed == filed).ToList();

    }
}
