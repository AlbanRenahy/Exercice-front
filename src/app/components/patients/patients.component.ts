import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/models/patient';
import { PatientService } from '../shared/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patient: Patient[]) => {
      this.patients = patient;
      console.log(this.patients)
    })
  }

}
