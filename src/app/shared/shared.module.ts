import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterBoxComponent } from './components/poster-box/poster-box.component';



@NgModule({
  declarations: [PosterBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [PosterBoxComponent],
  providers: []
})
export class SharedModule { }
