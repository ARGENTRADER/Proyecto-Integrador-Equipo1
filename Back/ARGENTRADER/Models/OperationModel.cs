using Microsoft.OpenApi.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Emit;
using System.Text.Json.Serialization;

namespace ARGENTRADER.Models
{
    public class OperationModel
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public int Quantity { get; set; }
        public float Commission { get; set; }
        public string? ShareCode { get; set; }
        
        [ForeignKey ("User")]
        public int User_Id { get; set; }
        [JsonIgnore]
        public UserModel User { get; set; }

    }
}
