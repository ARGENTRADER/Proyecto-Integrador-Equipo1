using ARGENTRADER.Dtos;
using ARGENTRADER.Models;
using ARGENTRADER.Repositories;

namespace ARGENTRADER.Services
{
    public class OperationService
    {
        public readonly DBRepository operationRepository;
        public OperationService(DBRepository operationRepository) {

            this.operationRepository = operationRepository;
        }


        public async Task<OperationModel?> Create(int id,NewOperationDtoClass operationDto)
        {
            OperationModel? operationModel = new();
            {
                operationModel.Quantity = operationDto.Quantity;
                operationModel.DateTime = DateTime.Today;
                operationModel.ShareCode = operationDto.ShareCode;
                operationModel.User_Id = id;
                operationModel.Commission = 2;
            }

            OperationModel result = await operationRepository.CreateOperation(operationModel);
            return result;
        }

        public async Task<List<OperationModel>> GetUserOperations(int id)
        {
            return await operationRepository.GetUserOperations(id);
           
        }
    }
}
