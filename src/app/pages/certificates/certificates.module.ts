import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './certificate/certificate.component';
import { NbCardModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewsService } from '../layout/news.service';
import { CertificateService } from '../../@core/service/certificate.service';


@NgModule({
  declarations: [
    CertificateComponent,
  ],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
  ],
  providers: [
    CertificateService,
  ],
})
export class CertificatesModule {
}
