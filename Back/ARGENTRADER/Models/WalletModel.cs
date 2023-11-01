using Microsoft.AspNetCore.SignalR;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ARGENTRADER.Models
{
    public class WalletModel
    {
        public int Id { get; set; }
        public float amount { get; set; }
        
        [ForeignKey("User")]
        public int User_Id { get; set; }

        [JsonIgnore]
        public UserModel User { get; set; }
    }
}
