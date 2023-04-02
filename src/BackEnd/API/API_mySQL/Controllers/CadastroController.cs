using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_mySQL.Data;
using API_mySQL.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using NuGet.Protocol.Plugins;
using System.Web;



namespace API_mySQL.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class CadastroController: ControllerBase
    {
        private readonly APIDbContext _context;

       // public bool BCrypt { get; private set; }

        public CadastroController(APIDbContext context)
        {
            _context = context;
        }

        //POST: api/cadastro/entrar
        [HttpPost("entrar")]                             //Voce denomina a requisicao do Frontend
        public async Task<ActionResult> Login([FromForm] Cadastro abc)//estou esperando chegar um fromform
        {
            var t = await _context.Cadastro.FirstOrDefaultAsync(c => c.Senha == abc.Senha && c.CNPJ == abc.CNPJ);
      

            if (t == null)
            {
                return Ok($"usuário {abc.CNPJ} não existe no sistema");
            }

            var usuario = await _context.Cadastro.Include(c => c.CadastroCampanhas).FirstOrDefaultAsync(c => c.Senha == abc.Senha && c.CNPJ == abc.CNPJ);
                                                                    //c: Do Banco   || cadastro: Do Frontend
            /*
            1. Ele busca na entidade (tabela) [cadastro]
            2. Ele filtra esse resultado (1.) passando como parametro de busca: c.Usuario == cadastro.usuario
            3. Ele retorna todos os cadastroas que atendem este parametro de busca
            4. Ele retorna o primeiro ou nulo caso nao tenha nenhum (FirstOrDefaultAsync)
            */

           
            
            return Ok(usuario);
            //retornando o json completo, nome,usuario, codigo e senha.

        }


        //POST: api/cadastro/entrar
        [HttpPost("entrar2")]                             //Voce denomina a requisicao do Frontend
        public async Task<ActionResult> Login2([FromForm] Cadastro abc)//estou esperando chegar um fromform
        {
            var t = await _context.Cadastro.FirstOrDefaultAsync(c => c.CNPJ == abc.CNPJ);
            if (t == null)
            {
                return Ok($"usuário {abc.CNPJ} não existe no sistema");
            }

            var usuario = await _context.Cadastro.Include(c => c.CadastroCampanhas).FirstOrDefaultAsync(c => c.CNPJ == abc.CNPJ);
            //c: Do Banco   || cadastro: Do Frontend
            /*
            1. Ele busca na entidade (tabela) [cadastro]
            2. Ele filtra esse resultado (1.) passando como parametro de busca: c.Usuario == cadastro.usuario
            3. Ele retorna todos os cadastroas que atendem este parametro de busca
            4. Ele retorna o primeiro ou nulo caso nao tenha nenhum (FirstOrDefaultAsync)
            */



            return Ok(usuario);
            //retornando o json completo, nome,usuario, codigo e senha.

        }
   

        

        //GET: api/cadastro
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cadastro>>> GetCadastro()
        {//task é um objeto que representa uma tarefa/acessar simutaneamente
            return await _context.Cadastro.ToListAsync();
        }

        //GET: api/cadastro/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cadastro>> GetCadastro(int id)
        {
            
            var cadastro = await _context.Cadastro.Include(c => c.CadastroCampanhas).FirstOrDefaultAsync(cadastro => cadastro.Codigo == id);

            if (cadastro == null)
            {
                return NotFound();  
            }
            return cadastro;
        }
        // PUT: api/cadastro/5
        //To protect from overpositing attacks, see 
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastro(int id, Cadastro cadastro)
        {
            if(id != cadastro.Codigo)
            {
                return BadRequest();
            }
            _context.Entry(cadastro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!CadastroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return  NoContent();    

        }
        //POST: API/Cadastro
        [HttpPost] 
        public async Task<ActionResult<Cadastro>> PostCadastro(Cadastro cadastro)
        {
            _context.Cadastro.Add(cadastro);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CadastroExists(cadastro.Codigo))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetCadastro", new {id=cadastro.Codigo},cadastro);
        }
        //DELETE: api/Cadastro/5
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteCadastro(int id)
        {
            var cadastro = await _context.Cadastro.FindAsync(id);
            if(cadastro == null)
            {
                return NotFound();
            }
            _context.Cadastro.Remove(cadastro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CadastroExists(int id)
        {
            return _context.Cadastro.Any(e => e.Codigo == id);
        }
    }




}

