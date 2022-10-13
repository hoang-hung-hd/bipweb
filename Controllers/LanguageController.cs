using BipWebVn.Models;
using BipWebVn.Services;
using Microsoft.AspNetCore.Mvc;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private LanguageService _languageService;
        public LanguageController(LanguageService languageService)
        {
            _languageService = languageService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var languages = _languageService.GetAll();
            return Ok(languages);
        }

        [HttpGet("{id}")]
        public IActionResult GetCategoryById(int id)
        {
            try
            {
                var language = _languageService.GetLanguageById(id);
                return Ok(language);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateCategory([FromBody] LanguageForm model)
        {
            _languageService.CreateLanguage(model);
            return Ok(new { message = "Tạo ngôn ngữ thành công" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCategory(int id, [FromBody] LanguageForm model)
        {
            _languageService.UpdateLanguage(id, model);
            return Ok(new { message = "Đã cập nhập ngôn ngữ" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _languageService.DeleteLanguage(id);
            return Ok(new { message = "Đã xóa danh mục" });
        }
    }
}
