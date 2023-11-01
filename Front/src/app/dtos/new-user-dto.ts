export class NewUserDto {
    UserName: string;
    UserLastName: string;
    UserBornDay: Date;
    CredentialType: unknown;
    UserDni: string;
    UserEmail: string;
    Password: string;
    State: unknown;

    constructor(
        UserName: string,
        UserLastName: string,
        UserBornDay: Date,
        CredentialType: unknown,
        UserDni: string,
        UserEmail: string,
        Password: string,
        State: unknown
    ) {
        this.UserName = UserName;
        this.UserLastName = UserLastName;
        this.UserBornDay = UserBornDay;
        this.CredentialType = CredentialType;
        this.UserDni = UserDni;
        this.UserEmail = UserEmail;
        this.Password = Password;
        this.State = State;
    }
}
