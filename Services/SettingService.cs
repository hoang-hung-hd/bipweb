using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class SettingService
    {
        protected AppDbContext _context;
        public SettingService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Setting> GetAll()
        {
            return _context.Settings;
        }

        public Setting GetSettingById(int id)
        {
            var setting = _context.Settings.Find(id);
            if (setting == null) throw new KeyNotFoundException("Không tìm thấy danh mục nào");
            return setting;
        }

        public void CreateSetting(SettingForm model)
        {
            Setting setting = new Setting();
            setting.SettingName = model.SettingName;
            setting.SettingValue = model.SettingValue;

            _context.Settings.Add(setting);
            _context.SaveChanges();
        }

        public void UpdateSetting(int id, SettingForm model)
        {
            var setting = GetSettingById(id);
            setting.SettingName = model.SettingName;
            setting.SettingValue = model.SettingValue;

            _context.Settings.Update(setting);
            _context.SaveChanges();
        }

        public void DeleteSetting(int id)
        {
            var setting = GetSettingById(id);
            _context.Settings.Remove(setting);
            _context.SaveChanges();
        }

    }
}
