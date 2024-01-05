import { Injectable } from '@angular/core';
import { CertificateData, CertificatePageQuery, CertificateVO } from '../domain/vo/certificate';
import { DataTable } from '../domain/vo/base-data';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class CertificateService extends CertificateData {

  constructor(private http: HttpClient) {
    super();
  }

  fetchData(param: CertificatePageQuery): Observable<HttpResponse<CertificatePageQuery>> {
    return this.http.get<CertificatePageQuery>('/api/certificate/page/query', {observe: 'response'});
  }
}
