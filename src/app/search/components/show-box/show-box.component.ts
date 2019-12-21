import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Show } from '@app/core/models/show.model';

@Component({
  selector: 'app-show-box',
  templateUrl: './show-box.component.html',
  styleUrls: ['./show-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowBoxComponent implements OnInit {

  @Input()
  show: Show;

  constructor() { }

  ngOnInit() {
  }

}
