import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import any = jasmine.any;
import Resource = fhir.Resource;

@Injectable()
export class ConformanceService {

    constructor(private http: Http){}

    getConformanceBySourceUrl(sourceUrl: string) {
        let headers = new Headers({'Accept': 'application/json+fhir'});
        let options = new RequestOptions({'headers': headers});
        return this.http.get(sourceUrl, options)
            .toPromise()
            .then(response => response.json() as Resource)
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}