import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { BookDescriptionDirective } from 'src/features/directives/book-description.directive';
import { BookDataService } from 'src/features/services/books-data.service';
import { StoreCommonModule } from 'src/common/common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let bookDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponent, BookDescriptionDirective],
      imports: [StoreCommonModule, RouterTestingModule, HttpClientModule, BrowserAnimationsModule],
      providers: [BookDataService]
    })
      .compileComponents();
  }));

  beforeEach(inject([BookDataService], s => {
    bookDataService = s;
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBookDetail should return array', () => {
    const response = {
      id: '1',
      name: 'The Great Gatsby',
      type: 'Hard cover',
      start: '2019-06-05T17:42:58.876Z',
      update: '2019-06-05T17:42:58.876Z',
      img: 'https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg'
    };
    const id = 1;
    let mockDataService = jasmine.createSpyObj(bookDataService.getBookDetail, { 'books': of(response) });
    // spyOn(bookDataService, 'getBookDetail').and.returnValue(of(response));
    component.getBookDetail(id);
    fixture.detectChanges();
    expect(component.des).toEqual(mockDataService);
  });
});
