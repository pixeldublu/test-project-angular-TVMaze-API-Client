import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { ShellComponent } from '@app/shell/shell.component';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  /**
   * Create routes using the shell
   * @param routes The routes to add
   * @return New route using shell
   */
    static childRoutes(routes: Routes): Route {
      return {
        path: '',
        component: ShellComponent,
        children: routes,
        // Reuse ShellComponent instance when navigating between child views
        data: { reuse: true }
      };
    }
}
