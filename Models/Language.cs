using System.ComponentModel.DataAnnotations;

namespace BipWebVn.Models
{
    public class Language
    {
        [Key]
        public int LanguageId { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string LanguageName { get; set; }


        public ICollection<About> Abouts { get; set; }

        public ICollection<Carousel> Carousels { get; set; }
        public ICollection<Category> Categories { get; set; }
        public ICollection<OurService> OurServices { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<Setting> Settings { get; set; }
    }
}
