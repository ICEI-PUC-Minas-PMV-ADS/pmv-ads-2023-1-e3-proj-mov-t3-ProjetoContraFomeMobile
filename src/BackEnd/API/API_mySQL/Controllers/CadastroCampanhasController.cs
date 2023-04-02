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
    public class CadastroCampanhasController : ControllerBase
    {
        private readonly APIDbContext _context;

        public CadastroCampanhasController(APIDbContext context)
        {
            _context = context;
        }

        // GET: api/CadastroCampanhas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CadastroCampanha>>> GetCadastroCampanha()
        {
            return await _context.CadastroCampanha.ToListAsync();
        }

        // GET: api/CadastroCampanhas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CadastroCampanha>> GetCadastroCampanha(int id)
        {
            var cadastroCampanha = await _context.CadastroCampanha.FindAsync(id);

            if (cadastroCampanha == null)
            {
                return NotFound();
            }

            return cadastroCampanha;
        }

        // PUT: api/CadastroCampanhas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastroCampanha(int id, CadastroCampanha cadastroCampanha)
        {
            Console.WriteLine(id);
            
            if (id != cadastroCampanha.idCampanha)
            {
                return BadRequest();
            }

            _context.Entry(cadastroCampanha).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CadastroCampanhaExists(id))
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

        // POST: api/CadastroCampanhas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CadastroCampanha>> PostCadastroCampanha(CadastroCampanha cadastroCampanha)
        {
            
            _context.CadastroCampanha.Add(cadastroCampanha);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCadastroCampanha", new { id = cadastroCampanha.idCampanha }, cadastroCampanha);
        }



        // DELETE: api/CadastroCampanhas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCadastroCampanha(int id)
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

        private bool CadastroCampanhaExists(int id)
        {
            return _context.CadastroCampanha.Any(e => e.idCampanha == id);
        }
    }
}
