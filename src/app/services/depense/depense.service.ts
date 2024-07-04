import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http:HttpClient) { }

postDepense(depenseDto:any):Observable<any>{
        return this.http.post(url+ "/api/depense",depenseDto);
}

getAllDepenses():Observable<any>{
  return this.http.get(url+"/api/depense/all");
}
getDepenseById(id:number):Observable<any>{
  return this.http.get(url+`/api/depense/${id}`);
}

deleteDepense(id:number):Observable<any>{
return this.http.delete(url+`/api/depense/${id}`);
}
updateDepense(id:number, depenseDto:any):Observable<any>{
  return this.http.put(url+`/api/depense/${id}`,depenseDto);
}


}
