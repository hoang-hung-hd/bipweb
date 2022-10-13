using BipWebVn.Models;

namespace BipWebVn.Services
{
    public class ContactService
    {
        private AppDbContext _context;

        public ContactService(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Contact> GetAll()
        {
            return _context.Contacts;
        }

        public Contact GetContactById(int id)
        {
            var contact = _context.Contacts.Find(id);
            if (contact == null) throw new KeyNotFoundException("Không tìm thấy thông tin liên lạc nào trùng khớp");
            return contact;
        }

        public void CreateContact(ContactForm model)
        {
            Contact contact = new Contact();
            contact.ContactName = model.ContactName;
            contact.ContactEmail = model.ContactEmail;
            contact.ContactSubject = model.ContactSubject;
            contact.ContactMessage = model.ContactMessage;

            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }

        public void UpdateContact(int id, ContactForm model)
        {
            var contact = GetContactById(id);
            contact.ContactName = model.ContactName;
            contact.ContactEmail = model.ContactEmail;
            contact.ContactSubject = model.ContactSubject;
            contact.ContactMessage = model.ContactMessage;

            _context.Contacts.Update(contact);
            _context.SaveChanges();
        }

        public void DeleteContact(int id)
        {
            var contact = GetContactById(id);
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
        }
    }
}
