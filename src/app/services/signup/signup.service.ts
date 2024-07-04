import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../../shared/user';

const url=environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  constructor(private http:HttpClient) { }

  public loginUserFormRemote(user:User):Observable<any>{
      return this.http.post<any>(url+"/register",user);
  }
}
