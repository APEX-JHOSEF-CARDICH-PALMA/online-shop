import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:3000/api/user/';
  users:any[]= [
    {
      nombre:'Jhosef',
      job:'developer',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
]

  constructor(private _http: HttpClient) { 
    console.log('User service running');
  }

getUsers(){
  return this.users;
}
getApiUsers(){
  return this._http.get<any[]>(this.apiUrl);

}



}
