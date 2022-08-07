namespace TechnicalSupport.Abstract {
    public interface IEntity <T> where T: struct {
        T Id { get; set; }
    }
}
