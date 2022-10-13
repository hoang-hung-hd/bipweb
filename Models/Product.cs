using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class Product
    {
        [Key]
        public int ProductId { set; get; }

        [Required(ErrorMessage = "Hãy nhập tên tiêu đề")]
        public string ProductTitle { get; set; }

        [Required(ErrorMessage = "Hãy nhập thêm mô tả")]
        public string ProductDescription { get; set; }

        [Required(ErrorMessage = "Hãy thêm ảnh")]
        public string ProductImage { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public int? LanguageId { get; set; }
    }
}
