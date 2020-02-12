import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchResult } from '@app/core/models/search-result.model';
import { Show } from '@app/core/models/show.model';
import { SearchService } from '@app/search/services/search.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map, tap, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title, ɵDomAdapter } from '@angular/platform-browser';
import { TITLES } from '@env/environment';
import { BackService } from '@app/shared/services/back.service';
import { BackData } from '@app/core/models/back-data.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  showList: Show[] = [];
  keyCount = 0;
  backData: BackData;
  searched = '';
  searchSubscription: Subscription;

  constructor(
    private searchService: SearchService,
    private titleService: Title,
    private router: Router,
    private backService: BackService) {}

  ngOnInit() {
    this.backService.backData$.pipe(first(),
    tap(data => {
      if(data && data.searched && data.searched.trim().length > 0) {
        this.searchInput.nativeElement.value = data.searched;
        // this.searchInput.nativeElement.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true}));
        this.search(data.searched);
        this.searched = data.searched;
      }
      this.backService.updateBackData({show: false, searched: this.searched });
    })).subscribe();





    this.titleService.setTitle(TITLES.search);
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        tap((res) => {
          this.searched = '';
          this.keyCount = 0;
          this.backService.updateBackData({show: false, searched: this.searched});
          this.showList = (res.length <= 2) ? [] : this.showList[0] && this.showList[0].name ? this.showList : Array(5).fill({isLoading: true});
        }),
        filter(res => res.length > 2),
        // fake it till you make it :)
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(text => this.search(text));
  }

  private search(text: string) {
    this.searched = text;
    this.backService.updateBackData({show: false, searched: this.searched});
    this.keyCount = text.length;
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
  }

  public openShow(id: number): void {
    this.backService.updateBackData({show: true, searched: this.searched});
    this.router.navigateByUrl(`/details/${id}`);
  }




}
