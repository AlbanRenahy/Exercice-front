import { Component, OnInit } from '@angular/core';
import { Infirmiere } from '../shared/models/infirmiere';
import { InfirmiereService } from '../shared/services/infirmiere.service';

@Component({
  selector: 'app-infirmieres',
  templateUrl: './infirmieres.component.html',
  styleUrls: ['./infirmieres.component.scss']
})
export class InfirmieresComponent implements OnInit {

  infirmieres: Infirmiere[] = [];

  constructor(private infirmiereService: InfirmiereService) { }

  ngOnInit(): void {
    this.infirmiereService.getInfirmieres().subscribe((infirmiere: any) => {
      this.infirmieres = infirmiere.results;
      console.log(this.infirmieres)
    })
  }

}
