using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TechnicalSupport.DataBase;
using TechnicalSupport.Models;

namespace TechnicalSupport.Controllers {

    [ApiController]
    [Route("api/contacts")]
    public class ContactsController : ControllerBase {
        private readonly DataBaseContext db;

        public ContactsController(DataBaseContext _db) {
            db = _db;
            if (!db.Contacts.Any()) {
                db.Contacts.Add(new Contacts { Name = "Igor", Email = "Igor@ya.ru", Phone = "896062" });
                db.Contacts.Add(new Contacts { Name = "Dmitry", Email = "Dmitry@ya.ru", Phone = "895265" });
                db.Contacts.Add(new Contacts { Name = "Sanya", Email = "Sanya@ya.ru", Phone = "894068" });
                db.SaveChanges();
            }

            if (!db.DictSubjectMessage.Any()) {
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Техподдержка" });
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Отдел маркетинга" });
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Отдел продаж" });
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Отдел реализации" });
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Отдел разработок и автоматизации" });
                db.DictSubjectMessage.Add(new DictSubjectMessage { Subject = "Другое" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Contacts> Get() {
            return db.Contacts.ToList();
        }

        [HttpGet("getDictSubjectMessage")]
        public IEnumerable<DictSubjectMessage> GetDictSubjectMessage() {
            var result = db.DictSubjectMessage.ToList();
            return result;
        }

        [HttpGet("{id}")]
        public Contacts Get(long id) {
            var contacts = db.Contacts.FirstOrDefault(x => x.Id == id);
            return contacts;

        }

        [HttpPost]
        public IActionResult Post(ContactModel contact) {
            if (ModelState.IsValid) {
                db.Contacts.Add(contact.Contacts);
                db.SaveChanges();
                return Ok(contact);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Contacts contact) {
            if (ModelState.IsValid) {
                db.Update(contact);
                db.SaveChanges();
                return Ok(contact);
            }
            return BadRequest(ModelState);
        }
    }
    
    public class ContactModel {
        public Contacts Contacts { get; set; }
        public List<DictSubjectMessage> DictSubjectMessage { get; set; }
        public Messages Messages { get; set; } 
    }
}
