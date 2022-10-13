using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class Carousel
    {
        [Key]
        public int CarouselId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tiêu đề cho slide")]
        public string CarouselTitle { get; set; }
        [Required(ErrorMessage = "Vui lòng nhập nội dung cho slide")]
        public string CarouselContent { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tiêu ảnh cho slide")]
        public string CarouselImage { get; set; }

        public int LanguageId { get; set; }
    }
}
