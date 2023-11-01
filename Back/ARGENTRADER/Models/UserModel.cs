using System.Text.Json.Serialization;
using static ARGENTRADER.Repositories.DBRepository;

namespace ARGENTRADER.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string UserLastName { get; set; }
        public DateTime UserBornDay { get; set; }
        public CredentialType CredentialType { get; set; }
        public string UserDni { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public State State { get; set; }
        
        public ICollection<OperationModel>? Operations{get; set; }
        
        public WalletModel? Wallet { get; set; }

        public void AddWallet(WalletModel wallet) { 
        
            if (wallet != null)
            {
                this.Wallet = wallet;
            }
        }
        public void AddOperation(OperationModel operation)
        {
            if (operation != null)
            {
                Operations?.Add(operation);
                operation.User_Id = this.Id;
            }
        }
    }



}
