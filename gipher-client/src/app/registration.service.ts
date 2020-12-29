import { Injectable } from '@angular/core';
import { User} from '../app/user';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  [x: string]: any;



  constructor(private _http : HttpClient) { }
  public loginUserFromRemote(user :User):Observable<any>{
    
    return this._http.post<any>("http://localhost:8011/login", user,  { observe: 'response'}).pipe(
      map(
        userData=>{
          console.log(userData);
          sessionStorage.setItem('email', user.emailId);
          sessionStorage.setItem('username',userData.body.userName);
          let tokenStr='Bearer '+user.token;
          sessionStorage.setItem('token',tokenStr);
          return userData;
        }
      )
    );
  }
  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8011/registeruser",user);

}

public logout(){
  sessionStorage.removeItem('username');
  
}

handleError(error: Response){}

getLoginStatus(){
  if(sessionStorage.getItem('username') !== null){
    return true;
  }
  else{
    return false;
  }
}

}