using Microsoft.EntityFrameworkCore;

namespace BipWebVn.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option) : base(option) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var tableName = entityType.GetTableName();
                if (tableName.StartsWith("AspNet"))
                {
                    entityType.SetTableName(tableName.Substring(6));
                }
            }

            /*modelBuilder.Entity<ProductImageModel>().HasKey(table => new {
                table.ProductId,
                table.ImageId
            });*/
        }
        public DbSet<Contact> Contacts { set; get; }
        public DbSet<Category> Categories { set; get; }
        public DbSet<Carousel> Carousels { set; get; }
        public DbSet<About> Abouts { set; get; }
        public DbSet<OurService> OurServices { set; get; }
        public DbSet<Product> Products { get; set; }

        public DbSet<Setting> Settings { set; get; }

        public DbSet<Language> Languages { get; set; }

    }
}
