import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './containers/details/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { ShellModule } from '@app/shell/shell.module';
import { ShowsService } from './services/shows.service';
import { SharedModule } from '@app/shared/shared.module';
import { ShowResolver } from './resolvers/show.resolver';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    ShellModule,
    SharedModule,
    DetailsRoutingModule
  ],
  providers: [ShowsService, ShowResolver]
})
export class DetailsModule { }
