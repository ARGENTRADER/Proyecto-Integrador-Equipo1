using ArgentraderDemoBackend.DTOs;
using ArgentraderDemoBackend.Models;
using ArgentraderDemoBackend.Repositories;

namespace ArgentraderDemoBackend.Services
{
    public class UserService
    {
        private readonly DataBaseContext _dataBaseContext;

        public UserService(DataBaseContext dataBaseContext)
        {
            _dataBaseContext = dataBaseContext;
        }

        public async Task<UserDto> Obtener(int id)
        {
            return _dataBaseContext.Obtener(id).Result.ToDto();
        }

        public async Task<List<UserDto>> ObtenerTodos()
        {
            return _dataBaseContext.ObtenerTodos().Result.Select(user => user.ToDto()).ToList();
        }

        public async Task<UserDto> Crear(NewUserDto user)
        {
            UserModel nuevoUsuario = new UserModel()
            {
                Id = null,
                Nombre = user.Nombre,
                Apellido = user.Apellido,
                Email = user.Email,
            };

            UserModel entidad = await _dataBaseContext.Crear(nuevoUsuario);
            return entidad.ToDto();
        }

        public async Task<UserDto> Actualizar(UserDto user)
        {
            var entidad = await _dataBaseContext.Obtener(user.Id);
            if(entidad == null)
            {
                return null;
            }
            entidad.Nombre = user.Nombre;
            entidad.Apellido = user.Apellido;
            entidad.Email = user.Email;

            await _dataBaseContext.Actualizar(entidad);
            return entidad.ToDto();
        }

        public async Task<string> Eliminar(int id)
        {
            var resultado = await _dataBaseContext.Eliminar(id);
            return resultado;
        }
    }
}
