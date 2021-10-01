import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../../shared/models/patient';

@Component({
  selector: 'app-patients-card',
  templateUrl: './patients-card.component.html',
  styleUrls: ['./patients-card.component.scss']
})
export class PatientsCardComponent implements OnInit {

  @Input() patient!: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
