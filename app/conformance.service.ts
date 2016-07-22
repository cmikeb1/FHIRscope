import {Injectable} from '@angular/core';
import {Conformance, Resource, Rest} from './Conformance';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import any = jasmine.any;

@Injectable()
export class ConformanceService {

    constructor(private http: Http){}

    getConformance() {

        return this.http.get("app/confs")
            .toPromise()
            .then(response => response.json().data as Conformance[])
            .catch(this.handleError);
    }

    private handleError(error: any){
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}