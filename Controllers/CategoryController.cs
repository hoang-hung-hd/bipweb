using Microsoft.AspNetCore.Mvc;
using BipWebVn.Models;
using BipWebVn.Services;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private CategoryService _categoryService;
        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var categories = _categoryService.GetAll();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public IActionResult GetCategoryById(int id)
        {
            try
            {
                var category = _categoryService.GetCategoryById(id);
                return Ok(category);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateCategory([FromBody] CategoryForm model)
        {
            _categoryService.CreateCategory(model);
            return Ok(new { message = "Tạo danh mục thành công" });
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCategory(int id, [FromBody] CategoryForm model)
        {
            _categoryService.UpdateCategory(id, model);
            return Ok(new { message = "Đã cập nhập danh mục" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryService.DeleteCategory(id);
            return Ok(new { message = "Đã xóa danh mục" });
        }
    }
}
