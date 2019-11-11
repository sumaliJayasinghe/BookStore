import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookDataService } from 'src/features/services/books-data.service';
import { of, Observable } from 'rxjs';
import { StoreCommonModule } from 'src/common/common.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let bookDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      providers: [BookDataService],
      imports: [StoreCommonModule, RouterTestingModule, HttpClientModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(inject([BookDataService], s => {
    bookDataService = s;
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllBooks and return list of books', async(() => {
    const response = [];
    spyOn(bookDataService, 'getBooks').and.returnValue(of(response))
    component.getAllBooks();
    fixture.detectChanges();
    expect(component.bookList).toEqual(response);
  }));
});
