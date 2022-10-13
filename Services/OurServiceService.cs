using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class OurServiceService
    {
        private AppDbContext _context;
        protected UploadFileService _uploadFile;
        protected string folder = "FileUpload\\Ourservice";

        public OurServiceService(AppDbContext context, UploadFileService uploadFile)
        {
            _context = context;
            _uploadFile = uploadFile;
        }

        public IEnumerable<OurService> GetAll()
        {
            return _context.OurServices;
        }

        public OurService GetServiceById(int id)
        {
            var service = _context.OurServices.Find(id);
            if (service == null) throw new KeyNotFoundException("Không tìm thấy dịch vụ nào");
            return service;
        }

        public void CreateService(OurService service)
        {
            _context.OurServices.Add(service);
            _context.SaveChanges();
        }

        public void UpdateService(OurService service)
        {
            _context.OurServices.Update(service);
            _context.SaveChanges();
        }

        public void DeleteService(OurService service)
        {
            _context.OurServices.Remove(service);
            _context.SaveChanges();
        }
        public string StoreFileTemp(IFormFile file)
        {
            string filePath = _uploadFile.PostFile(file, folder);
            return filePath;
        }
    }
}
