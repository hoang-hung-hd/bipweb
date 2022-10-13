using BipWebVn.Models;
using BipWebVn.Services;
using Microsoft.AspNetCore.Mvc;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        private AboutService _aboutService;
        public AboutController(AboutService aboutService)
        {
            _aboutService = aboutService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var abouts = _aboutService.GetAll();
            return Ok(abouts);
        }

        [HttpGet("{id}")]
        public IActionResult GetContactById(int id)
        {
            try
            {
                var about = _aboutService.GetAboutById(id);
                return Ok(about);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateAbout([FromForm] AboutForm model)
        {
            try
            {
                About about = new About();
                about.AboutTitle = model.AboutTitle;
                about.AboutContent = model.AboutContent;
                about.AboutIcon = model.AboutIcon;
                if (model.File != null)
                {
                    string imagePath = _aboutService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        about.AboutImage = imagePath;
                    }
                    else
                    {
                        about.AboutImage = "";
                    }
                }
                _aboutService.CreateAbout(about);
                return Ok(new { message = "Tạo thông tin thành công" });

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public IActionResult UpdateAbout(int id, [FromForm] AboutForm model)
        {
            try
            {
                var about = _aboutService.GetAboutById(id);
                about.AboutTitle = model.AboutTitle;
                about.AboutContent = model.AboutContent;
                about.AboutIcon = model.AboutIcon;
                if (model.File != null)
                {
                    string imagePath = _aboutService.StoreFileTemp(model.File);

                    if (imagePath != null && imagePath != "")
                    {
                        if (about.AboutImage != "")
                        {
                            var oldPath = about.AboutImage.Replace("files", "FileUpload");
                            FileInfo oldFile = new FileInfo(oldPath);
                            if (oldFile.Exists)
                            {
                                oldFile.Delete();
                            }
                        }
                        about.AboutImage = imagePath;
                    }
                }
                _aboutService.UpdateAbout(about);
                return Ok(new { message = "Cập nhập thông tin thành công" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteAbout(int id)
        {
            try
            {
                var about = _aboutService.GetAboutById(id);
                if (about.AboutImage != "")
                {
                    FileInfo oldFile = new FileInfo(about.AboutImage);
                    if (oldFile.Exists)
                    {
                        oldFile.Delete();
                    }
                }
                _aboutService.DeleteAbout(about);
                return Ok(new { message = "Đã xóa thông tin" });
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
                var filePath = _aboutService.StoreFileTemp(file);
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
