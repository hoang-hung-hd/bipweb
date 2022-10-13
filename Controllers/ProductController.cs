using BipWebVn.Models;
using BipWebVn.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BipWebVn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ProductService _productService;
        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<Queryable<Product>>> GetAll([FromQuery] string? searchString, int lang, string sortBy = "", string sortOrder = "", int page = 1, int pageSize = 50)
        {
            return await _productService.GetAll(searchString, lang, sortBy, sortOrder, page, pageSize);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                var product = _productService.GetProductInfor(id);
                return Ok(product);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateProduct([FromForm] ProductForm model)
        {
            try
            {
                Product product = new Product();
                product.ProductTitle = model.ProductTitle;
                product.ProductDescription = model.ProductDescription;
                product.CategoryId = model.CategoryId;
                product.LanguageId = model.LanguageId;
                if (model.File != null)
                {
                    string imagePath = _productService.StoreFileTemp(model.File);
                    if (imagePath != null && imagePath != "")
                    {
                        product.ProductImage = imagePath;

                    }
                    else
                    {
                        product.ProductImage = "";
                    }
                }
                else
                {
                    product.ProductImage = "No Image";
                }
                _productService.CreateProduct(product);
                return Ok(new { message = "Tạo sản phẩm thành công" });

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, [FromForm] ProductForm model)
        {
            try
            {
                var product = _productService.GetProductById(id);
                product.ProductTitle = model.ProductTitle;
                product.ProductDescription = model.ProductDescription;
                product.CategoryId = model.CategoryId;
                product.LanguageId = model.LanguageId;
                //string? imagePath = HttpContext.Session.GetString("imagePath");
                if (model.File != null)
                {
                    string imagePath = _productService.StoreFileTemp(model.File);

                    if (imagePath != null && imagePath != "")
                    {
                        if (product.ProductImage != "")
                        {
                            var oldPath = product.ProductImage.Replace("files", "FileUpload");
                            FileInfo oldFile = new FileInfo(oldPath);

                            if (oldFile.Exists)
                            {
                                oldFile.Delete();
                            }
                        }
                        product.ProductImage = imagePath;
                        //HttpContext.Session.SetString("imagePath", "");
                    }
                }
                _productService.UpdateProduct(product);
                return Ok(new { message = "Cập nhập sản phẩm thành công" });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }



        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _productService.GetProductById(id);
                if (product.ProductImage != "")
                {
                    FileInfo oldFile = new FileInfo(product.ProductImage);
                    if (oldFile.Exists)
                    {
                        oldFile.Delete();
                    }
                }
                _productService.DeleteProduct(product);
                return Ok(new { message = "Đã xóa sản phẩm" });
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
                var filePath = _productService.StoreFileTemp(file);
                HttpContext.Session.SetString("imagePath", filePath);
                return Ok(new { message = "Tạo file thành công ! " });
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

    }
}
