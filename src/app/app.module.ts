import { BackService } from './shared/services/back.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app//app-routing.module';
import { AppComponent } from '@app/app.component';
import { SearchModule } from '@app//search/search.module';
import { ShellModule } from '@app//shell/shell.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchModule,
    ShellModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
