using System.ComponentModel.DataAnnotations;

namespace TechnicalSupport.Models {
    public class DictSubjectMessage : Entity {
        [Display(Name = "Тема")]
        public string Subject { get; set; }
        public long ? MessageId { get; set; }
    }
}
