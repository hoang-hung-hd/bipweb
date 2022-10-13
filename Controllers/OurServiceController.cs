using Microsoft.AspNetCore.Mvc;
using BipWebVn.Models;
using BipWebVn.Services;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OurServiceController : ControllerBase
    {
        private OurServiceService _ourServiceService;
        public OurServiceController(OurServiceService ourServiceService)
        {
            _ourServiceService = ourServiceService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var services = _ourServiceService.GetAll();
            return Ok(services);
        }

        [HttpGet("{id}")]
        public IActionResult GetContactById(int id)
        {
            try
            {
                var contact = _ourServiceService.GetServiceById(id);
                return Ok(contact);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateService([FromForm] OurServiceForm model)
        {
            try
            {
                OurService service = new OurService();
                service.OurServiceTitle = model.OurServiceTitle;
                service.OurServiceContent = model.OurServiceContent;
                if (model.File != null)
                {
                    string imagePath = _ourServiceService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        service.OurServiceImage = imagePath;
                    }
                    else
                    {
                        service.OurServiceImage = "";
                    }
                }
                _ourServiceService.CreateService(service);
                return Ok(new { message = "Tạo dịch vụ thành công" });

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public IActionResult UpdateService(int id, [FromForm] OurServiceForm model)
        {
            try
            {
                var service = _ourServiceService.GetServiceById(id);
                service.OurServiceTitle = model.OurServiceTitle;
                service.OurServiceContent = model.OurServiceContent;
                if (model.File != null)
                {
                    string imagePath = _ourServiceService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        if (service.OurServiceImage != "")
                        {
                            var oldPath = service.OurServiceImage.Replace("files", "FileUpload");
                            FileInfo oldFile = new FileInfo(oldPath);
                            if (oldFile.Exists)
                            {
                                oldFile.Delete();
                            }
                        }
                        service.OurServiceImage = imagePath;
                    }
                }
                _ourServiceService.UpdateService(service);
                return Ok(new { message = "Cập nhập  dịch vụ thành công" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteService(int id)
        {
            try
            {
                var service = _ourServiceService.GetServiceById(id);
                if (service.OurServiceImage != "")
                {
                    var oldPath = service.OurServiceImage.Replace("files", "FileUpload");
                    FileInfo oldFile = new FileInfo(oldPath);
                    if (oldFile.Exists)
                    {
                        oldFile.Delete();
                    }
                }
                _ourServiceService.DeleteService(service);
                return Ok(new { message = "Xóa dịch vụ thành công" });
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
                var filePath = _ourServiceService.StoreFileTemp(file);
                HttpContext.Session.SetString("imagePath", filePath);
                return Ok(new { message = "Tạo file thành công " });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }
}
