import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBestSellerComponent } from './book-best-seller.component';

describe('BookBestSellerComponent', () => {
  let component: BookBestSellerComponent;
  let fixture: ComponentFixture<BookBestSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBestSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
