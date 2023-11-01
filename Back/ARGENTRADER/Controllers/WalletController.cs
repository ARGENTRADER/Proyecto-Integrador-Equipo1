using ARGENTRADER.Models;
using ARGENTRADER.Services;
using Microsoft.AspNetCore.Mvc;

namespace ARGENTRADER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : Controller
    {

        private readonly WalletService _walletService;

        public WalletController(WalletService walletService)
        {
            _walletService = walletService;
        }

        public WalletService WalletService => _walletService;

        [HttpGet]
        public async Task<IActionResult> GetUserWallet(int id)
        {
       
            WalletModel wallet = await WalletService.GetUserWallet(id);
            if(wallet == null)
            {
                return NotFound();
            }
            return Ok(wallet);
        }
    }
}
