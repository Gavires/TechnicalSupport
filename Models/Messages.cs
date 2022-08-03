using System.ComponentModel.DataAnnotations;

namespace TechnicalSupport.Models {
    public class Messages : Entity {
        [Display(Name = "Ваше сообщение")]
        public string Text { get; set; }
    }
}
