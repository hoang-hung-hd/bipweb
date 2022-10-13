using Microsoft.AspNetCore.Mvc;
using BipWebVn.Models;
using BipWebVn.Services;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private ContactService _contactService;
        protected UploadFileService _uploadFile;
        public ContactController(ContactService contactService, UploadFileService uploadFile)
        {
            _contactService = contactService;
            _uploadFile = uploadFile;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var contacts = _contactService.GetAll();
            return Ok(contacts);
        }

        [HttpGet("{id}")]
        public IActionResult GetContactById(int id)
        {
            try
            {
                var contact = _contactService.GetContactById(id);
                return Ok(contact);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateContact([FromForm] ContactForm model)
        {
            _contactService.CreateContact(model);
            return Ok(new { message = "Tạo thông tin thành công" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCity(int id, [FromForm] ContactForm model)
        {
            _contactService.UpdateContact(id, model);
            return Ok(new { message = "Cập nhập thông tin thành công" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _contactService.DeleteContact(id);
            return Ok(new { message = "Xóa thông tin thành công" });
        }
    }
}
