using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_mySQL.Models
{
    [Table("cadastro")]
    public class Cadastro
    {
        [Key]
        public int Codigo { get; set; }

        [Column("RazaoSocial")]
        public string? RazaoSocial { get; set; }

        [Column("NomeFantasia")]
        public string? NomeFantasia { get;set;}

        [Column("CNPJ")]
        public int? CNPJ { get; set; }

        [Column("Fundacao")]
        public string? Fundacao { get; set; }

        [Column("Endereco")]
        public string? Endereco { get; set; }

        [Column("Cidade")]
        public string? Cidade { get; set; }

        [Column("Estado")]
        public string? Estado { get; set; }

        [Column("CEP")]
        public int? CEP { get; set; }

        [Column("Pais")]
        public string? Pais { get; set; }

        [Column("Telefone")]
        public int? Telefone { get; set; }

        [Column("Email")]
        public string? Email { get; set; }
        [Column("Senha")]
        public string? Senha { get; set; }

        public List<CadastroCampanha>? CadastroCampanhas { get; set;}
    }
}

