import { TestBed } from '@angular/core/testing';

import { BookDataService } from './books-data.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
describe('BookDataService', () => {
  // let httpTestingController: HttpTestingController;


  let service: BookDataService;
  // let httpClient: HttpClient;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BookDataService]
    });

  });
  beforeEach(() => { service = TestBed.get(BookDataService); });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getBooks should return value from observable', () => {

    (done: DoneFn) => {
      service.getBooks().subscribe(data => {
        expect(data).toBe('observable value');
        done();
      });
    }
  });

  it('#getBookDetail should return value from observable', () => {
    const id = 1;
    (done: DoneFn) => {
      service.getBookDetail(id).subscribe(data => {
        expect(data).toBe('observable value');
        done();
      });
    }
  });
});
