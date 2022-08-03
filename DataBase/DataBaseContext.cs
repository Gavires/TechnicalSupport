using Microsoft.EntityFrameworkCore;
using TechnicalSupport.Models;

namespace TechnicalSupport.DataBase {
    public class DataBaseContext : DbContext {
        public DbSet<Contacts> Contacts { get; set; }
        public DbSet<DictSubjectMessage> DictSubjectMessage { get; set; }
        public DbSet<Messages> Messages { get; set; }
        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options) {
            Database.EnsureCreated();
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder) {
        //    modelBuilder.Entity<Contacts>().HasData(
        //            new Contacts { Name = "Igor", Email = "Igor@ya.ru", Phone = "896062" },
        //            new Contacts { Name = "Dmitry", Email = "Dmitry@ya.ru", Phone = "895265" },
        //            new Contacts { Name = "Sanya", Email = "Sanya@ya.ru", Phone = "894068" }
        //    );
        //}

    }
}
