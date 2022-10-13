namespace BipWebVn.Models
{

    public class ContactForm
    {
        public string ContactName { get; set; }

        public string ContactEmail { get; set; }

        public string? ContactSubject { get; set; }
        public string? ContactMessage { get; set; }
    }

    public class CategoryForm
    {
        public string CategoryName { set; get; }
        public int LanguageId { get; set; }
    }
    public class CarouselForm
    {
        public string CarouselTitle { get; set; }
        public string CarouselContent { get; set; }
        public int LanguageId { get; set; }

        // public string CarouselImage { get; set; }

        public IFormFile? File { get; set; }
    }

    public class AboutForm
    {
        //public IFormFile AboutImage { get; set; }
        //public string AboutImage { get; set; }
        public string AboutTitle { get; set; }
        public string AboutContent { get; set; }
        public string? AboutIcon { get; set; }
        public IFormFile? File { get; set; }

        public int LanguageId { get; set; }
    }

    public class OurServiceForm
    {
        public string OurServiceTitle { get; set; }
        public string OurServiceContent { get; set; }
        public IFormFile? File { get; set; }

        public int LanguageId { get; set; }

        //public string OurServiceImage { get; set; }
    }
    public class ProductForm
    {
        public string ProductTitle { get; set; }
        public string ProductDescription { get; set; }
        //public string ProductImage { get; set; }
        public IFormFile? File { get; set; }
        public int CategoryId { get; set; }

        public int LanguageId { get; set; }
    }

    public class SettingForm
    {
        public string SettingName { set; get; }
        public string SettingValue { set; get; }

        public int LanguageId { get; set; }

    }

    public class ProductInfor
    {
        public int ProductId { get; set; }
        public string ProductTitle { get; set; }
        public string ProductDescription { get; set; }
        public string ProductImage { get; set; }
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }

        public int? LanguageId { get; set; }
    }
    public class LanguageForm
    {
        public string LanguageName { get; set; }
    }
}
