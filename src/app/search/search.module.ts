import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBoxComponent } from './components/show-box/show-box.component';
import { SearchComponent } from './containers/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './services/search.service';
import { SharedModule } from '@app/shared/shared.module';
import { ShellModule } from '@app/shell/shell.module';



@NgModule({
  declarations: [SearchComponent, ShowBoxComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShellModule,
    SearchRoutingModule
  ],
  providers: [SearchService]
})
export class SearchModule { }
