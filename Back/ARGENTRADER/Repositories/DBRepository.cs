using ARGENTRADER.Migrations;
using ARGENTRADER.Models;
using Azure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Reflection.Metadata.Ecma335;

namespace ARGENTRADER.Repositories
{
    public class DBRepository:DbContext
    {
        public DBRepository(DbContextOptions<DBRepository> options)
            : base(options)
        { }

        public DbSet<UserModel> User { get; set; }
        public DbSet<WalletModel> Wallet { get; set; }
        public DbSet<OperationModel> Operation {  get; set; }

        public enum State
        {
            Active,
            Inactive
        }
        public enum CredentialType
        {
            DNI,
            LC,
            LE
        }
        public enum OperationType
        {
            Debit,
            Credit
        }
        public async Task<UserModel> Get(int id)
        {
            return await User.FirstAsync(x => x.Id == id);
        }

        public async Task<List<UserModel>> Get()
        {
            return await User.Include(u => u.Wallet)
                   .Include(u => u.Operations != null ? u.Operations : null)
                   .ToListAsync();
        }

        public async Task<UserModel> Create(UserModel user)
        {
            EntityEntry<UserModel> response = await User.AddAsync(user);
            await SaveChangesAsync();
            WalletModel wallet = new()
            {
                User_Id = user.Id,
                amount = 10000
            };
            await CreateWallet(wallet);
            user.AddWallet(wallet);
            SaveChanges();
            return await Get(response.Entity.Id);
        }

        public void Delete(int id)
        {
            UserModel? user = User.FirstOrDefault(x => x.Id==id);
            if (user != null)
            {
                User.Remove(user);
                SaveChanges();
            }
            
        }

        public void Update(int id, UserModel entidadActualizada)
        {
            UserModel? user = User.FirstOrDefault(y => y.Id==id);
            if (user != null)
            {
                user.UserName = entidadActualizada.UserName;
                user.UserLastName = entidadActualizada.UserLastName;
                user.UserEmail = entidadActualizada.UserEmail;
                user.UserBornDay = entidadActualizada.UserBornDay;
                user.UserDni = entidadActualizada.UserDni;
                user.CredentialType = entidadActualizada.CredentialType;
                user.State = entidadActualizada.State;
                SaveChanges();
            }
        }

        public async Task<WalletModel> GetWallet(int id)
        {
            return await Wallet.FirstAsync(x => x.Id == id);
        }

        public async Task<List<WalletModel>> GetWallets()
        {
            return await Wallet.ToListAsync();
        }

        public async Task<WalletModel> CreateWallet(WalletModel wallet)
        {
            EntityEntry<WalletModel> response = await Wallet.AddAsync(wallet);
            await SaveChangesAsync();
            return await GetWallet(response.Entity.Id);
        }
        public async Task<WalletModel> GetUserWallet(int id)
        {
            var userWallet = await Wallet.FirstAsync(o => o.User_Id == id);

            return userWallet;
        }

        public async Task<OperationModel> GetOperation(int id)
        {
            return await Operation.FirstAsync(x => x.Id == id);
        }

        public async Task<List<OperationModel>> GetOperations()
        {
            return await Operation.ToListAsync();
        }

        public async Task<OperationModel> CreateOperation(OperationModel operation)
        {
            EntityEntry<OperationModel>response = await Operation.AddAsync(operation);
            await SaveChangesAsync();
            UserModel user = new();
            user = await User.FirstAsync(c => c.Id == operation.User_Id);
            user.AddOperation(operation);
            SaveChanges();

            return await GetOperation(response.Entity.Id);
        }

        public async Task<List<OperationModel>> GetUserOperations(int id)
        {
            var userOperations = await Operation.Where(o => o.User_Id == id)
            .ToListAsync();

            return userOperations;
        }




    }
}
