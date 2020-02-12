import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '@app/shared/services/back.service';
import { Observable } from 'rxjs';
import { BackData } from '@app/core/models/back-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private backService: BackService) { }

  public showBackButton = false;

  ngOnInit() {
    this.backService.backData$.pipe(tap((data: BackData) => this.showBackButton = data.show)).subscribe();
  }

  goHome(reset = false) {
    if(reset) {
      this.backService.updateBackData({show: false, searched: ''});
    }
    this.router.navigateByUrl('/search');
  }

}
