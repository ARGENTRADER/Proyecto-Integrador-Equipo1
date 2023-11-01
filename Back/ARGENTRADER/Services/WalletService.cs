using ARGENTRADER.Models;
using ARGENTRADER.Repositories;

namespace ARGENTRADER.Services
{
    public class WalletService
    {
        public readonly DBRepository walletRepository;
        public WalletService(DBRepository walletRepository)
        {

            this.walletRepository = walletRepository;
        }

        public async Task<WalletModel> GetUserWallet(int id)
        {
            return await walletRepository.GetUserWallet(id);
        }
    }
}
