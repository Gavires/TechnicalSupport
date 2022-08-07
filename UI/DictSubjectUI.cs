using TechnicalSupport.Models;

namespace TechnicalSupport.UI {
    public class DictSubjectUI : DictSubjectMessage {
        public string SublectId { get; set; }
        override public long Id => long.Parse(SublectId);
    }
}