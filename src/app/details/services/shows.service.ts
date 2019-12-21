import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { API_URLS } from '@env/environment';
import { Show } from '@app/core/models/show.model';


@Injectable()
export class ShowsService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      // 'Content-Type': 'application/json'
    });
  }

  getShow(id: string): Observable<Show> {
    return this.http
      .get(`${API_URLS.shows}/${id}`, {headers: this.headers})
      .pipe(
        map((response: HttpResponse<Show>) => {
          return response as unknown as Show;
        }),
        retry(2),
        catchError((error: any) => this.handleError(error))
      );
  }


  private handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      return throwError(error.message || 'backend server error');
    }
    return throwError(error || 'backend server error');

  }

}
