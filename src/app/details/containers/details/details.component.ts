import { tap, first } from 'rxjs/operators';
import { BackService } from '@app/shared/services/back.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '@app/core/models/show.model';
import { Title } from '@angular/platform-browser';
import { TITLES } from '@env/environment';
import { BackData } from '@app/core/models/back-data.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public show: Show;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private backService: BackService
  ) {
        this.show = this.route.snapshot.data.show;
        if(this.show && this.show.name) {
          this.backService.backData$.pipe(first(), tap((data: BackData) => this.backService.updateBackData({show: true, searched: data.searched}))).subscribe();
          this.titleService.setTitle(`${this.show.name}${TITLES.details}`);
        }
  }

  ngOnInit() {

  }

  public strip(html: string) {
    return html ? html.replace(/<.*?>/g, '') : '';
  }


}

