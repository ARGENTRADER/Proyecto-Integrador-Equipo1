using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using ArgentraderDemoBackend.Models;
using ArgentraderDemoBackend.DTOs;

namespace ArgentraderDemoBackend.Repositories
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options): base(options) { }

        public DbSet<UserModel> User { get; set; }

        public async Task<UserModel> Obtener(int id)
        {
            return await User.FirstAsync(x => x.Id == id);
        }

        public async Task<List<UserModel>> ObtenerTodos()
        {
            return await User.ToListAsync();
        }

        public async Task<UserModel> Crear(UserModel user)
        {
            EntityEntry<UserModel> response = await User.AddAsync(user);
            await SaveChangesAsync();
            return await Obtener(response.Entity.Id ?? throw new Exception("Error al guardar, intente nuevamente."));
        }

        public async Task<UserModel> Actualizar(UserModel user)
        {
            var entity = await User.FirstAsync(x => x.Id == user.Id);
            if(entity != null)
            {
                entity.Nombre = "Nombre actualizado";
                User.Update(entity);
                await SaveChangesAsync();
            }
            return entity;
        }

        public async Task<string> Eliminar(int id)
        {
            var entity = await User.FirstAsync(x => x.Id == id);
            var mensaje = "";
            if (entity != null)
            {
                User.Remove(entity);
                await SaveChangesAsync();
                mensaje = "Eliminado con éxito";
            } else {
                mensaje = "Error al eliminar";
            }
            return mensaje;
        }
    }
}
