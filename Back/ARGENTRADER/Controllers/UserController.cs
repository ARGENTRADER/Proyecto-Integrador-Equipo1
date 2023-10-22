using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ARGENTRADER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public String Saludar() {
            return "Hola";
        }

    }
}
