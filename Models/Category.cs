using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập tên danh mục")]
        public string CategoryName { get; set; }

        public int LanguageId { get; set; }

        public List<Product> Product { get; set; }
    }
}
