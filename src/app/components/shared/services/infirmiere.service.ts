import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Infirmiere } from '../models/infirmiere';

@Injectable({
  providedIn: 'root'
})
export class InfirmiereService {

  constructor(private http: HttpClient) { }

  getInfirmieres(): Observable<Infirmiere[]>{
    return this.http.get<Infirmiere[]>(`${environment.medical_url}infirmieres`);
  }
}