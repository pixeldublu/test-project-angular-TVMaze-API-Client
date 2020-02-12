import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterBoxComponent } from './components/poster-box/poster-box.component';
import { BackService } from './services/back.service';



@NgModule({
  declarations: [PosterBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [PosterBoxComponent],
  providers: [BackService]
})
export class SharedModule { }
