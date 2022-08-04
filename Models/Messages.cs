using System.ComponentModel.DataAnnotations;

namespace TechnicalSupport.Models {
    public class Messages : Entity {
        public string Text { get; set; }
        public long? SubjectMessageId { get; set; }
    }
}
