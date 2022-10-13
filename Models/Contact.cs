using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên của bạn")]
        public string ContactName { get; set; }

        [Required(ErrorMessage = "Vui lòng nhập tên email của bạn")]
        public string ContactEmail { get; set; }
        public string? ContactSubject { get; set; }

        public string? ContactMessage { get; set; }
        public string? LanguageId { get; set; }
    }
}
