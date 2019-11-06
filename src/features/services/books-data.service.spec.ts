import { TestBed } from '@angular/core/testing';

import { BookDataService } from './books-data.service';

describe('BooksHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDataService = TestBed.get(BookDataService);
    expect(service).toBeTruthy();
  });
});
