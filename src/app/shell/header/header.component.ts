import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '@app/shared/services/back.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private backService: BackService) { }

  backData: Observable<string>;

  ngOnInit() {
    this.backData = this.backService.backData$;
  }

  goHome() {
    this.router.navigateByUrl('/search');
  }

}
