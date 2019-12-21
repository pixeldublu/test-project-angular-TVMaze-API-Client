import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { API_URLS } from '@env/environment';
import { SearchResult } from '@app/core/models/search-result.model';


@Injectable()
export class SearchService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      // 'Content-Type': 'application/json'
    });
  }

  search(query: string): Observable<SearchResult[]> {
    const params = new HttpParams().set('q', query);
    return this.http
      .get(API_URLS.search, {headers: this.headers, params})
      .pipe(
        map((response: HttpResponse<SearchResult[]>) => {
          return response as unknown as SearchResult[];
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
