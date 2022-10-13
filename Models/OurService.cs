using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class OurService
    {
        [Key]
        public int OurServiceId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tiêu đề")]
        public string OurServiceTitle { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập nội dung")]
        public string OurServiceContent { get; set; }

        [Required(ErrorMessage = "Vui lòng thêm hình ảnh")]
        public string OurServiceImage { get; set; }

        public int LanguageId { get; set; }
    }
}
