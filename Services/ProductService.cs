using BipWebVn.Models;
using Microsoft.EntityFrameworkCore;

namespace BipWebVn.Services
{
    public class ProductService
    {
        private AppDbContext _context;
        protected UploadFileService _uploadFile;
        protected string folder = "FileUpload\\Product";

        public ProductService(AppDbContext context, UploadFileService uploadFile)
        {
            _context = context;
            _uploadFile = uploadFile;
        }

        public async Task<Queryable<Product>> GetAll(string searchString = "", int lang = 1, string sortBy = "", string sortOrder = "", int page = 1, int pageSize = 50)
        {
            var products = (from pro in _context.Products
                            join cat in _context.Categories on pro.CategoryId equals cat.CategoryId
                            join language in _context.Languages on pro.LanguageId equals language.LanguageId
                            where pro.LanguageId == lang
                            select new Product
                            {
                                ProductId = pro.ProductId,
                                ProductTitle = pro.ProductTitle,
                                ProductDescription = pro.ProductDescription,
                                ProductImage = pro.ProductImage,
                                CategoryId = pro.CategoryId,
                                Category = new Category
                                {
                                    CategoryId = cat.CategoryId,
                                    CategoryName = cat.CategoryName
                                },
                                LanguageId = pro.LanguageId
                            }); ;
            //return products;
            if (!String.IsNullOrEmpty(searchString))
            {
                products = products.Where(s => s.ProductTitle.Contains(searchString)
                                       || s.ProductDescription.Contains(searchString));
            }


            if (string.IsNullOrEmpty(sortBy))
                sortBy = "Id";
            if (string.IsNullOrEmpty(sortOrder))
                sortOrder = "DESC";
            else
                sortOrder = sortOrder == "ascend" ? "ASC" : "DESC";
            return await products.OrderBy(sortBy, sortOrder).GetPagedAsync(page, pageSize);
            //return await products.OrderBy
        }

        public Product GetProductById(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) throw new KeyNotFoundException("Không tìm thấy sản phẩm nào");
            return product;
        }

        public ProductInfor GetProductInfor(int id)
        {
            var product = (from pro in _context.Products
                           join cat in _context.Categories on pro.CategoryId equals cat.CategoryId
                           where pro.ProductId == id
                           select new ProductInfor
                           {
                               ProductId = pro.ProductId,
                               ProductTitle = pro.ProductTitle,
                               ProductDescription = pro.ProductDescription,
                               ProductImage = pro.ProductImage,
                               CategoryId = pro.CategoryId,
                               CategoryName = cat.CategoryName

                           }
                            );
            return (ProductInfor)product;
        }

        public void CreateProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
        }

        public void UpdateProduct(Product product)
        {
            _context.Products.Update(product);
            _context.SaveChanges();
        }

        public void DeleteProduct(Product product)
        {
            _context.Products.Remove(product);
            _context.SaveChanges();
        }

        public string StoreFileTemp(IFormFile file)
        {
            string filePath = _uploadFile.PostFile(file, folder);
            return filePath;
        }
    }
}
