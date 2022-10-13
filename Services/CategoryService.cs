using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class CategoryService
    {
        protected AppDbContext _context;
        public CategoryService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories;
        }

        public Category GetCategoryById(int id)
        {
            var category = _context.Categories.Find(id);
            if (category == null) throw new KeyNotFoundException("Không tìm thấy danh mục nào");
            return category;
        }

        public void CreateCategory(CategoryForm model)
        {
            Category category = new Category();
            category.CategoryName = model.CategoryName;
            category.LanguageId = model.LanguageId;

            _context.Categories.Add(category);
            _context.SaveChanges();
        }

        public void UpdateCategory(int id, CategoryForm model)
        {
            var category = GetCategoryById(id);
            category.CategoryName = model.CategoryName;

            _context.Categories.Update(category);
            _context.SaveChanges();
        }

        public void DeleteCategory(int id)
        {
            var category = GetCategoryById(id);
            _context.Categories.Remove(category);
            _context.SaveChanges();
        }
    }
}
