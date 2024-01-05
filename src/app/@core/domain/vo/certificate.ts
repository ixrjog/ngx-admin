import { DataTable } from './base-data';
import { PageQuery } from '../param/query-param';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


export interface CertificateVO {
    id: number;
    certificateId: string;
    name: string;
    domainName: string;
    certificateType: string;
    isActive: boolean;
    keyAlgorithm: string;
    notBefore: string;
    notAfter: string;
    comment: string;
    createTime: string;
    updateTime: string;
}

export interface CertificatePageQuery extends PageQuery {
    queryName: string;
}

export abstract class CertificateData {
    //  abstract fetchData(): any[];
    abstract fetchData(param: CertificatePageQuery): Observable<HttpResponse<CertificatePageQuery>>;
}
