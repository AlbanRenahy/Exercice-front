import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfirmieresComponent } from './components/infirmieres/infirmieres.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  {path: "infirmieres", component: InfirmieresComponent},
  {path: "patients", component: PatientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
