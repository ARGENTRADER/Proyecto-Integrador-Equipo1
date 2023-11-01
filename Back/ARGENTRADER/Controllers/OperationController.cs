using ARGENTRADER.Services;
using Microsoft.AspNetCore.Mvc;
using ARGENTRADER.Dtos;
using ARGENTRADER.Models;


namespace ARGENTRADER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : Controller
    {
        private readonly OperationService _operationService;

        public OperationController(OperationService operationService)
        {
            _operationService = operationService;
        }

        public OperationService OperationService => _operationService;

        [HttpPost]
        public async Task<IActionResult?> Create(int id,NewOperationDtoClass operationDto)
        {
            return Ok(await _operationService.Create(id, operationDto));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserOperations(int id)
        {
            return Ok(await _operationService.GetUserOperations(id));
        }
    }

}
