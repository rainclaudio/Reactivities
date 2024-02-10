using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // this is gonna represent the Entity in the database
        public DbSet<Activity>  Activities{ get; set; }

    }
}