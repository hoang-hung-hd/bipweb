using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class About
    {
        [Key]
        public int AboutId { get; set; }
        [Required(ErrorMessage = "Vui lòng thêm ảnh")]
        public string AboutImage { get; set; }

        [Required(ErrorMessage = "Vui lòng thêm tiêu đề")]
        public string AboutTitle { get; set; }

        [Required(ErrorMessage = "Vui lòng thêm nội dung")]
        public string AboutContent { get; set; }

        public int LanguageId { get; set; }

        public string? AboutIcon { get; set; }
    }
}
