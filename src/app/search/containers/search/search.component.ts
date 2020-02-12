import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchResult } from '@app/core/models/search-result.model';
import { Show } from '@app/core/models/show.model';
import { SearchService } from '@app/search/services/search.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TITLES } from '@env/environment';
import { BackService } from '@app/shared/services/back.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  showList: Show[] = [];
  keyCount = 0;
  searched: string;
  searchSubscription: Subscription;

  constructor(
    private searchService: SearchService,
    private titleService: Title,
    private router: Router,
    private backService: BackService) {}

  ngOnInit() {


    // this.backService.updateBackData('');

    this.titleService.setTitle(TITLES.search);
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        tap((res) => {
          this.searched = '';
          this.keyCount = 0;
          this.showList = (res.length <= 2) ? [] : this.showList[0] && this.showList[0].name ? this.showList : Array(5).fill({isLoading: true});
        }),
        filter(res => res.length > 2),
        // fake it till you make it :)
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.keyCount = text.length;
        this.searched = text;
        this.searchSubscription = this.searchService
          .search(text)
          .pipe(finalize(() => {
            if (this.searchSubscription) {
              this.searchSubscription.unsubscribe();
            }
          }))
          .subscribe(
            (results: SearchResult[]) => {
              if (results.length > 0) {
              }
              this.showList = results.map(
                (result: SearchResult) => result.show
              );
            },
            (error: string) => {
              console.error(error);
            }
          );
      });
  }

  public openShow(id: number): void {
    this.backService.updateBackData(this.searched);
    this.router.navigateByUrl(`/details/${id}`);
  }




}
