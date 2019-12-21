import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '@app/core/models/show.model';
import { Title } from '@angular/platform-browser';
import { TITLES } from '@env/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public show: Show;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title
  ) {
        this.show = this.route.snapshot.data.show;
        this.titleService.setTitle(`${this.show.name}${TITLES.details}`);
  }

  ngOnInit() {

  }

  public strip(html: string) {
    return html ? html.replace(/<.*?>/g, '') : '';
  }


}

