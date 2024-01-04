import { Injectable } from '@angular/core';
import { CertificateData, CertificatePageQuery, CertificateVO } from '../data/certificate';
import { DataTable } from '../data/base-data';

@Injectable()
export class CertificateService extends CertificateData {

  fetchData(param: CertificatePageQuery): DataTable<CertificateVO> {
   // const req = http.get('/api/');

    return null;
  }
}
