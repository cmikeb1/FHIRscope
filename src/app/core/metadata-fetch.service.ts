import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MetadataSource} from "./metadata-source.model";
import {METADATA_SOURCES} from "./metadata-sources";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class MetadataFetchService {

  private _metadataUrlSource = new BehaviorSubject<string>('');
  metadataUrl$ = this._metadataUrlSource.asObservable();

  constructor(private http: Http) {
  }

  fetchMetadataForCurrentSource(): Observable<any> {
    return this.fetchMetadataForUrl(this._metadataUrlSource.getValue());
  }

  fetchMetadataForUrl(source: string): Observable<any> {
    return this.http.get(source)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any){
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  static getMetadataSources(): MetadataSource[] {
    return METADATA_SOURCES;
  }

  updateSourceUrl(sourceUrl: string) {
    this._metadataUrlSource.next(sourceUrl);
  }
}
