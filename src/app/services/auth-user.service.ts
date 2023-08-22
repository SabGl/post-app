import { Injectable } from '@angular/core';

export interface IUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  user!: IUser;

  login(user:IUser){
    localStorage.setItem('userData', JSON.stringify(user));

  }

  logout(){
    localStorage.removeItem('userData');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }
}
