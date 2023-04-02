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
        public int? CNPJ { get; internal set; }
    }
}