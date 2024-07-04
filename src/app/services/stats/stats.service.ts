import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url='http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  getStats():Observable<any>{
    return this.http.get(url +"/api/stats");
  }

  getChart():Observable<any>{
    return this.http.get(url+"/api/stats/chart");

  }

}
