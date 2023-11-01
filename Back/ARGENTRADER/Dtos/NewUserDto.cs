using static ARGENTRADER.Repositories.DBRepository;

namespace ARGENTRADER.Dtos
{
    public class NewUserDto
    {
       public string UserName { get; set; }
        public string UserLastName { get; set; }
        public DateTime UserBornDay { get; set; }
        public CredentialType CredentialType { get; set; }
        public string UserDni { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public State State { get; set; }
      
    }
}
