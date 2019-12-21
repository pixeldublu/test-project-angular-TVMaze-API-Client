import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowsService } from './shows.service';
import { dummyShowResponse } from '@app/core/tests/dummies/show.dummy';

describe('ShowsService', () => {
  let injector: TestBed;
  let service: ShowsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShowsService],
    });

    injector = getTestBed();
    service = injector.get(ShowsService);
    httpMock = injector.get(HttpTestingController);
  });



  it('search() should return data', () => {
      service.getShow('82').subscribe((res) => {
        expect(res).toEqual(dummyShowResponse);
      });

      const req = httpMock.expectOne('http://api.tvmaze.com/shows/82');
      expect(req.request.method).toBe('GET');
      req.flush(dummyShowResponse);
    });

  afterEach(() => {
    httpMock.verify();
  });
});
