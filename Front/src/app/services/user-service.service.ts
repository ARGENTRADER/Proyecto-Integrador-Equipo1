/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUserDto } from 'app/dtos/new-user-dto';
import { UserModel } from 'app/dtos/user-model';
import { enviroment } from 'app/enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  createUser(user: NewUserDto):Observable<UserModel>{
    return this.http.post<UserModel>(enviroment.url+"/user", user)
  }
}
