import { NgModule } from '@angular/core';
import { SearchComponent } from './containers/search/search.component';
import { ShellService } from '@app/shell/shell.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  ShellService.childRoutes([
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent, data: { title: 'Search' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class SearchRoutingModule { }
