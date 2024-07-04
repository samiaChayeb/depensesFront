import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url='http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class RevenuService {

  constructor(private http:HttpClient) { }

postRevenu(revenuDto:any):Observable<any>{
        return this.http.post(url+ "/api/revenu",revenuDto);
}

getAllRevenus():Observable<any>{
  return this.http.get(url+"/api/revenu/all");
}
getRevenuById(id:number):Observable<any>{
  return this.http.get(url+`/api/revenu/${id}`);
}

deleteRevenu(id:number):Observable<any>{
return this.http.delete(url+`/api/revenu/${id}`);
}
updateRevenu(id:number, revenuDto:any):Observable<any>{
  return this.http.put(url+`/api/revenu/${id}`,revenuDto);
}
}