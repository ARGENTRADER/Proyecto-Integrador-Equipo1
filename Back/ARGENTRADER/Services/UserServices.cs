using ARGENTRADER.Dtos;
using ARGENTRADER.Models;
using ARGENTRADER.Repositories;

namespace ARGENTRADER.Services
{
    public class UserServices
    {
        public readonly DBRepository userRepository;
        public UserServices(DBRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public async Task<UserModel> Get(int id)
        {
            return await userRepository.Get(id);
        }

        public async Task<UserModel?> Create(NewUserDto user)
        {
            UserModel? userModel = new UserModel();
            {
                userModel.UserName = user.UserName;
                userModel.UserLastName = user.UserLastName;
                userModel.UserBornDay = user.UserBornDay;
                userModel.UserDni = user.UserDni;
                userModel.UserEmail = user.UserEmail;
                userModel.Password = user.Password;
                userModel.State = user.State;
                userModel.CredentialType = user.CredentialType;
            }

            UserModel result = await userRepository.Create(userModel);
            return result;
        }

        public async Task<List<UserModel>> Get()
        {
            return await userRepository.Get();
        }

        public void Update(int id, UserModel entidadActualizada)
        {
            userRepository.Update(id, entidadActualizada);
        }
        public void Delete(int id)
        {
            userRepository.Delete(id);
        }

        //public async BuyShare(int id, OperationModel operationModel)
        //{
        //   await userRepository.BuyShare(id,operationModel);
        //}
    }
}
