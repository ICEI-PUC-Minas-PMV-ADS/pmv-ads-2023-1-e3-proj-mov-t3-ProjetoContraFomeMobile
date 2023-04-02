using API_mySQL.Models;
using Microsoft.EntityFrameworkCore;

namespace API_mySQL.Data
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {

        }
        //public DbSet<Endereco> Estado { get; set; }
        public DbSet<Cadastro> Cadastro { get; set; }

        public DbSet<CadastroCampanha> CadastroCampanha { get; set; }

        public DbSet<Doacao> Doacao { get; set; }


    }

}

