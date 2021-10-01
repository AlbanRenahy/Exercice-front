import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.medical_url}/patients`);
  }

  donnees!: Patient;

}
