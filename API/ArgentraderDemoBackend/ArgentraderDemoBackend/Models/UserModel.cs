using ArgentraderDemoBackend.DTOs;

namespace ArgentraderDemoBackend.Models
{
    public class UserModel
    {
        public int? Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }


        public UserDto ToDto()
        {
            return new UserDto()
            {
                Id = Id ?? throw new Exception("El id no puede ser null"),
                Nombre = Nombre,
                Apellido = Apellido,
                Email = Email,
            };
        }
    }
}
