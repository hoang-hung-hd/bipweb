using BipWebVn.Models;
using BipWebVn.Services;
using Microsoft.AspNetCore.Mvc;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarouselController : ControllerBase
    {
        private CarouselService _carouselService;
        public CarouselController(CarouselService carouselService)
        {
            _carouselService = carouselService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var carousels = _carouselService.GetAll();
            return Ok(carousels);
        }

        [HttpGet("{id}")]
        public IActionResult GetCarouselById(int id)
        {
            try
            {
                var carousel = _carouselService.GetCarouselById(id);
                return Ok(carousel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateCarousel([FromForm] CarouselForm model)
        {
            try
            {
                Carousel carousel = new Carousel();
                carousel.CarouselTitle = model.CarouselTitle;
                carousel.CarouselContent = model.CarouselContent;
                if (model.File != null)
                {
                    string? imagePath = _carouselService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        carousel.CarouselImage = imagePath;
                    }
                    else
                    {
                        carousel.CarouselImage = "";
                    }
                }
                _carouselService.CreateCarousel(carousel);
                return Ok(new { message = "Tạo slide thành công" });

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCarousel(int id, [FromForm] CarouselForm model)
        {
            try
            {
                var carousel = _carouselService.GetCarouselById(id);
                carousel.CarouselTitle = model.CarouselTitle;
                carousel.CarouselContent = model.CarouselContent;

                if (model.File != null)
                {
                    string? imagePath = _carouselService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        if (carousel.CarouselImage != "")
                        {
                            var oldPath = carousel.CarouselImage.Replace("files", "FileUpload");
                            FileInfo oldFile = new FileInfo(oldPath);
                            if (oldFile.Exists)
                            {
                                oldFile.Delete();
                            }
                        }
                        carousel.CarouselImage = imagePath;
                    }
                }

                _carouselService.UpdateCarousel(carousel);
                return Ok(new { message = "Đã cập nhập slide" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCarousel(int id)
        {
            try
            {
                var carousel = _carouselService.GetCarouselById(id);
                if (carousel.CarouselImage != "")
                {
                    var oldPath = carousel.CarouselImage.Replace("files", "FileUpload");
                    FileInfo oldFile = new FileInfo(oldPath);
                    if (oldFile.Exists)
                    {
                        oldFile.Delete();
                    }
                }
                _carouselService.DeleteCarousel(carousel);
                return Ok(new { message = "Đã xóa slide" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost("storeFile")]
        public IActionResult StoreFileTemp([FromForm] IFormFile file)
        {
            try
            {
                var filePath = _carouselService.StoreFileTemp(file);
                HttpContext.Session.SetString("imagePath", filePath);
                return Ok(new { message = "Tạo file thành công" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }
}
