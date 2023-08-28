import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesServiceService {
  url = "./assets/data/23-08-23.json"
  
  constructor(private http:HttpClient){}
  
  getCotizaciones():Observable<unknown>{
    return this.http.get(this.url); 
  }
  }
