using Microsoft.Identity.Client;

using System.ComponentModel.DataAnnotations;

namespace ArgentraderDemoBackend.DTOs
{
    public class NewUserDto
    {
        [Required(ErrorMessage = "El nombre es requerido.")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El apellido es requerido.")]
        public string Apellido { get; set; }

        [Required(ErrorMessage = "El e-mail es requerido.")]

        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "El email no es correcto")]
        public string Email { get; set; }
    }
}
