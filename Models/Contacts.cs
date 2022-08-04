using System.ComponentModel.DataAnnotations;

namespace TechnicalSupport.Models {
    public class Contacts : Entity {
        public string Name { get; set; }
        public string Email { get; set; }
        public long? Phone { get; set; }
        public long? MessageId { get; set; }

    }
}
