import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-poster-box',
  templateUrl: './poster-box.component.html',
  styleUrls: ['./poster-box.component.scss']
})
export class PosterBoxComponent implements OnInit {

  @Input()
  image: string;
  @Input()
  isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
