import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './containers/details/details.component';
import { ShowResolver } from './resolvers/show.resolver';


const routes: Routes = [
    { path: ':id', component: DetailsComponent, resolve: {show: ShowResolver}, data: { title: 'Details' } },
   // { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DetailsRoutingModule { }
