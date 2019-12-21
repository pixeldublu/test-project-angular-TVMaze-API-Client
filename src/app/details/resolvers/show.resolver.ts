import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Show } from '@app/core/models/show.model';
import { ShowsService } from '@app/details/services/shows.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable()
export class ShowResolver implements Resolve<Observable<Show>> {
  constructor(private showService: ShowsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.showService.getShow(route.paramMap.get('id')).pipe(
      catchError(err => {
        console.warn('Not found... or something... navigating to home');
        this.router.navigateByUrl('/');
        return err;
      }),
      map(show => (show ? show : {}) as Show)
    );
  }
}
