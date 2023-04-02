using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_mySQL.Data;
using API_mySQL.Models;

namespace API_mySQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoacaoController : ControllerBase
    {
        private readonly APIDbContext _context;

        public DoacaoController(APIDbContext context)
        {
            _context = context;
        }

        // GET: api/Doacao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doacao>>> GetDoacao()
        {
            return await _context.Doacao.ToListAsync();
        }

        // GET: api/Doacao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Doacao>> GetDoacao(int id)
        {
            var doacao = await _context.Doacao.FindAsync(id);

            if (doacao == null)
            {
                return NotFound();
            }

            return doacao;
        }

        //get api 
        [HttpGet("DoacaoPorCampanha/{id}")]
        public async Task<List<dynamic>> GetDoacaoPorCampanha(int id)
        {
            List<dynamic> result = new List<dynamic>();
            var doacao = await _context.Doacao.ToListAsync();

            var cadastroCampanha = await _context.CadastroCampanha.ToListAsync();
            var validacao = doacao.FirstOrDefault(d => d.CadastroCampanhaidCampanha == id);

            if (validacao == null || string.IsNullOrEmpty(validacao.ToString()))
                return result.ToList<dynamic>();

            var innerJoin =  doacao.Join(
                                 cadastroCampanha,
                                 d => d.CadastroCampanhaidCampanha,
                                 c => c.idCampanha,
                                (d, c) => new
                                {
                                    d.CadastroCampanhaidCampanha,
                                    d.tipoDoacao,
                                    d.Valor,
                                    c.CadastroCodigo,
                                    c.NomeDaCampanha
                                }).OrderByDescending(x => x.CadastroCampanhaidCampanha == id) ;

            var query = innerJoin.ToArray().ToList();
         
            foreach (var item in query)
                if (item.CadastroCodigo == query[0].CadastroCodigo)
                    result.Add(item);


            return result.ToList<dynamic>();
        }

        // PUT: api/Doacao/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDoacao(int id, Doacao doacao)
        {
            if (id != doacao.idDoacao)
            {
                return BadRequest();
            }

            _context.Entry(doacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DoacaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Doacao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Doacao>> PostDoacao(Doacao doacao)
        {
            _context.Doacao.Add(doacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDoacao", new { id = doacao.idDoacao }, doacao);
        }

        // DELETE: api/Doacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoacao(int id)
        {
            var doacao2 = await _context.Doacao.ToListAsync();
            var doacoes = doacao2.Where(d => d.CadastroCampanhaidCampanha == id).ToList();
            if (doacoes.Count > 0)
            {
                foreach (var item in doacoes)
                {
                    var doacao = await _context.Doacao.FindAsync(item.idDoacao);
                    if (doacao == null)
                    {
                        return NotFound();
                    }

                    _context.Doacao.Remove(doacao);
                    await _context.SaveChangesAsync();
                }
                var campanha = await _context.CadastroCampanha.FindAsync(doacoes[0].CadastroCampanhaidCampanha);
                _context.CadastroCampanha.Remove(campanha);
                await _context.SaveChangesAsync();
                return NoContent();

            }
            else
            {
                var cadastroCampanha = await _context.CadastroCampanha.FindAsync(id);
                if (cadastroCampanha == null)
                {
                    return NotFound();
                }

                _context.CadastroCampanha.Remove(cadastroCampanha);
                await _context.SaveChangesAsync();

                return NoContent();

            }
        }

        private bool DoacaoExists(int id)
        {
            return _context.Doacao.Any(e => e.idDoacao == id);
        }
    }
}
