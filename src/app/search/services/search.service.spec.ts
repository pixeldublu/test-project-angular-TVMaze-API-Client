import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';
import { dummySearchResponse } from '@app/core/tests/dummies/search.dummy';

describe('SearchService', () => {
  let injector: TestBed;
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });

    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });



  it('search() should return data', () => {
      service.search('game of thrones').subscribe((res) => {
        expect(res).toEqual(dummySearchResponse);
      });

      const req = httpMock.expectOne('http://api.tvmaze.com/search/shows?q=game%20of%20thrones');
      expect(req.request.method).toBe('GET');
      req.flush(dummySearchResponse);
    });

  afterEach(() => {
    httpMock.verify();
  });
});
