using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class LanguageService
    {
        protected AppDbContext _context;

        public LanguageService(AppDbContext context)
        {
            _context = context;

        }

        public IEnumerable<Language> GetAll()
        {
            return _context.Languages;
        }

        public Language GetLanguageById(int id)
        {
            var language = _context.Languages.Find(id);
            if (language == null) throw new KeyNotFoundException("Không tìm thấy ngôn ngữ nào");
            return language;
        }

        public void CreateLanguage(LanguageForm model)
        {
            Language language = new Language();
            language.LanguageName = model.LanguageName;

            _context.Languages.Add(language);
            _context.SaveChanges();
        }

        public void UpdateLanguage(int id, LanguageForm model)
        {
            var language = GetLanguageById(id);
            language.LanguageName = model.LanguageName;

            _context.Languages.Update(language);
            _context.SaveChanges();
        }

        public void DeleteLanguage(int id)
        {
            var language = GetLanguageById(id);
            _context.Languages.Remove(language);
            _context.SaveChanges();
        }
    }
}
