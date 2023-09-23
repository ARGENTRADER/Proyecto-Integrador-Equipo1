using Microsoft.Identity.Client;

namespace ArgentraderDemoBackend.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
    }
}
