namespace ServerSide.Models
{
    public class Job
    {
        public int Id { get; set; }
        // public JobFields JobField { get; set; }
        public string? JobName { get; set; }
        public string? Company { get; set; }
        public string? JobArea  { get; set; }
        public string? Description { get; set; }
        public string? Filed { get; set; }

        // public List<string>? Requirements { get; set; }
    }
}
