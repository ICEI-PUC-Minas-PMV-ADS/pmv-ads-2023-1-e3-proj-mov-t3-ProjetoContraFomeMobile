# Tabela Cadastro
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

# Tabela CadastroCampanha

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_mySQL.Models
{
    [Table("cadastroCampanha")]
    public class CadastroCampanha
    {
        [Key]
        public int idCampanha { get; set;}

        [Column("NomeDaOng")]
        public string? NomeDaOng { get; set; }

        [Column("NomeDaCampanha")]
        public string? NomeDaCampanha { get; set; }

        [Column("DescricaoDaCampanha")]
        public string? DescricaoDaCampanha { get; set; }

        [Column("Telefone")]
        public int? Telefone { get; set; }

        [Column("Email")]
        public string? Email { get; set; }

        [Column("Endereco")]
        public string? Endereco { get; set; }

        [Column("Cidade")]
        public string? Cidade { get; set; }

        [Column("Estado")]
        public string? Estado { get; set; }

        [Column("Pais")]
        public string? Pais { get; set; }

        [Column("Pix")]
        public bool? Pix { get; set; }

        [Column("CartaoDeCredito")]
        public bool? CartaoDeCredito { get; set; }

        [Column("ReceberFisico")]
        public bool? ReceberFisico { get; set; }

        public int CadastroCodigo { get; set; }  


    }
}
# Tabela Doação

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace API_mySQL.Models
{
    [Table("Doacao")]
    public class Doacao
    {
        [Key]
        public int idDoacao { get; set; }

        [Column("tipoDoacao")]
        public int? tipoDoacao { get; set; }

        [Column("Valor")]
        public int? Valor { get; set; }

        public int idCampanha { get; set; }

        public int CadastroCampanhaidCampanha { get; set; }

    }
}
