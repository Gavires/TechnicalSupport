using System.ComponentModel.DataAnnotations;

namespace TechnicalSupport.Models {
    public class Contacts : Entity {
        [Display(Name = "Ваше имя")]
        public string Name { get; set; }
        [Display(Name = "Ваш Email")]
        public string Email { get; set; }
        [Display(Name = "Ваш телефон")]
        public string Phone { get; set; }
        public long? DictSubjectMessageId { get; set; }

    }
}
