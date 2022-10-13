using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class AboutService
    {
        protected AppDbContext _context;
        protected UploadFileService _uploadFile;
        protected string folder = "FileUpload\\About";

        public AboutService(AppDbContext context, UploadFileService uploadFile)
        {
            _context = context;
            _uploadFile = uploadFile;

        }

        public IEnumerable<About> GetAll()
        {
            return _context.Abouts;
        }

        public About GetAboutById(int id)
        {
            var abouts = _context.Abouts.Find(id);
            if (abouts == null) throw new KeyNotFoundException("Không tìm thấy thông tin nào");
            return abouts;
        }

        public void CreateAbout(About about)
        {
            _context.Abouts.Add(about);
            _context.SaveChanges();
        }

        public void UpdateAbout(About about)
        {
            //Delete the old file and change the url new file
            _context.Abouts.Update(about);
            _context.SaveChanges();
        }

        public void DeleteAbout(About about)
        {
            _context.Abouts.Remove(about);
            _context.SaveChanges();
        }

        public string StoreFileTemp(IFormFile file)
        {
            string filePath = _uploadFile.PostFile(file, folder);
            return filePath;
        }
    }
}
