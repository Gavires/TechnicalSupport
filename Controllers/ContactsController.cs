using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using TechnicalSupport.DataBase;
using TechnicalSupport.Models;
using TechnicalSupport.UI;

namespace TechnicalSupport.Controllers {

    [ApiController]
    [Route("api/contacts")]
    public class ContactsController : ControllerBase {
        private readonly DataBaseContext db;
        private string log = "";
        public ContactsController(DataBaseContext _db) {
            db = _db;
            if (!db.Contacts.Any()) {
                db.Contacts.Add(new Contacts { Name = "Igor", Email = "Igor@ya.ru", Phone = 896062 });
                db.Contacts.Add(new Contacts { Name = "Dmitry", Email = "Dmitry@ya.ru", Phone = 895265 });
                db.Contacts.Add(new Contacts { Name = "Sanya", Email = "Sanya@ya.ru", Phone = 894068 });
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

        [HttpGet("Log")]
        public string ErrorLog () => log;

        [HttpPost]
        public IActionResult Post(ContactModel contactsModel) {
            try {
                CheckEmailAndNumber(contactsModel);
                if (ModelState.IsValid) {
                    var mess = new Messages {
                        SubjectMessageId = contactsModel.Subject.Id,
                        Text = contactsModel.Messages.Text
                    };
                    db.Messages.Add(mess);
                    db.SaveChanges();
                    contactsModel.Contacts.MessageId = mess.Id;
                    contactsModel.Subject.Subject = GetSubjectMessage(contactsModel.Subject.Id).Subject;
                    db.Contacts.Add(contactsModel.Contacts);
                    db.SaveChanges();
                    return Ok(contactsModel);
                }
                return BadRequest(ModelState);
            } catch (Exception exc) {
                return BadRequest(exc.Message);
            }
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

        public DictSubjectMessage GetSubjectMessage(long Id) => db.DictSubjectMessage.FirstOrDefault(x => x.Id == Id);

        private void CheckEmailAndNumber(ContactModel model) {
            Regex regex = new Regex(@"[0-9]{10}");
            MatchCollection matches = regex.Matches(model.Contacts.Phone.ToString());
            if (matches.Count == 0)
                throw new Exception("Некорректный номер телефона!");
            if (!new EmailAddressAttribute().IsValid(model.Contacts.Email))
                throw new Exception("Формат Email неверный!");
        }
    }

    public class ContactModel {
        public Contacts Contacts { get; set; }
        public DictSubjectUI Subject { get; set; }
        public Messages Messages { get; set; }
        public string ErrorLog { get; set; }
    }
}