using Microsoft.AspNetCore.Mvc;
using BipWebVn.Models;
using BipWebVn.Services;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private SettingService _settingService;
        public SettingController(SettingService settingService)
        {
            _settingService = settingService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var categories = _settingService.GetAll();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public IActionResult GetSettingById(int id)
        {
            try
            {
                var setting = _settingService.GetSettingById(id);
                return Ok(setting);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateSetting([FromBody] SettingForm model)
        {
            _settingService.CreateSetting(model);
            return Ok(new { message = "Tạo cài đặt thành công" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSetting(int id, [FromBody] SettingForm model)
        {
            _settingService.UpdateSetting(id, model);
            return Ok(new { message = "Đã cập nhập cài đặt" });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSetting(int id)
        {
            _settingService.DeleteSetting(id);
            return Ok(new { message = "Đã xóa cài đặt" });
        }
    }
}
