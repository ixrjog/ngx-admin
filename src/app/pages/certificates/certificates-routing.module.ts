import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';


const routes: Routes = [{
  path: '',
  component: CertificateComponent,
  children: [{
    path: 'certificate',
    component: CertificateComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatesRoutingModule { }
