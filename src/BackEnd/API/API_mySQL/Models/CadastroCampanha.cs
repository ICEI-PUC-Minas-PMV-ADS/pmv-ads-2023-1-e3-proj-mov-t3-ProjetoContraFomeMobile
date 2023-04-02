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