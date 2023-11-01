using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ArgentraderDemoBackend.DTOs;
using ArgentraderDemoBackend.Services;

namespace ArgentraderDemoBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        private readonly UserService _userService;
        
        public ClientController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Obtener(int Id)
        {
            UserDto usuario = await _userService.Obtener(Id);
            return new OkObjectResult(usuario);
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerTodos()
        {
            List<UserDto> usuarios = await _userService.ObtenerTodos();
            return new OkObjectResult(usuarios);
        }

        [HttpPost]
        public async Task<IActionResult> Crear(NewUserDto nuevo)
        {
            UserDto usuario = await _userService.Crear(nuevo);
            return CreatedAtAction(nameof(Obtener), new {id = usuario.Id}, usuario);
        }

        [HttpPut]
        public async Task<IActionResult> Actualizar(UserDto editar)
        {
            var resultado = await _userService.Actualizar(editar);
            if(resultado == null)
            {
                return new NotFoundResult();
            }
            return new OkObjectResult(resultado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Eliminar(int Id)
        {
            return new OkObjectResult(await _userService.Eliminar(Id));
        }

    }
}
