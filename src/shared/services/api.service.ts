import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import environment from '../environment'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getFeed(feed: string): Observable<any> {
    let url = `${environment.apiBaseUrl}/${feed}.json`;
    return this.http.get(url).catch(this.handleError);
  }

  getItem(itemId: number): Observable<any> {
    return this.http
      .get(`${environment.apiBaseUrl}/item/${itemId}.json`)
      .catch(this.handleError);
  }

  getUser(userId: string): Observable<any> {
    return this.http
      .get(`${environment.apiBaseUrl}/user/${userId}.json`)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {

    return Observable.throw(error);
  }
}
