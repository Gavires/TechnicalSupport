namespace TechnicalSupport.Abstract.Long {
    public class EntityBase<T> : IEntity<T> where T : struct {
        public virtual T Id { get; set; }
    }
}
