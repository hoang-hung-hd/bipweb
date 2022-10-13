using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class CarouselService
    {
        protected AppDbContext _context;
        protected UploadFileService _uploadFile;
        protected string folder = "FileUpload\\Carousel";
        public CarouselService(AppDbContext context, UploadFileService uploadFile)
        {
            _context = context;
            _uploadFile = uploadFile;
        }

        public IEnumerable<Carousel> GetAll()
        {
            return _context.Carousels;
        }

        public Carousel GetCarouselById(int id)
        {
            var carousel = _context.Carousels.Find(id);
            if (carousel == null) throw new KeyNotFoundException("Không tìm thấy slide nào");
            return carousel;
        }

        public void CreateCarousel(Carousel carousel)
        {
            _context.Carousels.Add(carousel);
            _context.SaveChanges();
        }

        public void UpdateCarousel(Carousel carousel)
        {
            _context.Carousels.Update(carousel);
            _context.SaveChanges();
        }

        public void DeleteCarousel(Carousel carousel)
        {
            _context.Carousels.Remove(carousel);
            _context.SaveChanges();
        }
        public string StoreFileTemp(IFormFile file)
        {
            string filePath = _uploadFile.PostFile(file, folder);
            return filePath;
        }
    }
}
