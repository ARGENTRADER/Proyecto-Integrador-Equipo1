using ARGENTRADER.Dtos;
using ARGENTRADER.Models;
using ARGENTRADER.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace ARGENTRADER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserServices userServices;
        public UserController(UserServices userservices)
        {
            this.userServices = userservices;
        }

        public UserServices UserServices => userServices;

        [HttpGet("{id}")]
        public async Task<IActionResult?> getUser(int id)
        {
            UserModel? persona = await userServices.Get(id);
            return persona != null ? Ok(persona) : NotFound();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<UserModel>? result = await userServices.Get();
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult?> Create(NewUserDto user)
        {
            return Ok(await userServices.Create(user));
        }
        [HttpDelete]
        public async Task<IActionResult?> Delete(int id)
        {
            userServices.Delete(id);

            return NoContent();
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UserModel entidadActualizada)
        {
            userServices.Update(id, entidadActualizada);
            return NoContent();
        }
       
    }
}
