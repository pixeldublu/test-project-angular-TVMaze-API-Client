import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ShowBoxComponent } from '@app/search/components/show-box/show-box.component';
import { SharedModule } from '@app/shared/shared.module';
import { ShellModule } from '@app/shell/shell.module';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from '@app/search/search-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { SearchResult } from '@app/core/models/search-result.model';
import { SearchService } from '@app/search/services/search.service';
import { RouterTestingModule } from '@angular/router/testing';
import { dummySearchResponse } from '@app/core/tests/dummies/search.dummy';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

class FakeSearchService {
  search(query: string): Observable<SearchResult[]> {
    return of(dummySearchResponse);
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, ShowBoxComponent ],
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientModule,
        SharedModule,
        ShellModule,
        SearchRoutingModule
      ],
      providers: [
        {
        provide: SearchService,
        useClass: FakeSearchService,
      },]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a result on search', (done) => {

    const searchElement = element.querySelector('.search-input');
    searchElement.setAttribute('value', 'game of thrones');
    searchElement.dispatchEvent(new KeyboardEvent('keyup', {key: ''}));

    setTimeout(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.result-item')).nativeElement.textContent).toContain(component.showList[0].name);
      done();
    }, 1000);


  });
});
