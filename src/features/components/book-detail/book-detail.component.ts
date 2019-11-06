import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from 'src/features/services/books-data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;

  des = {};

  constructor(private bookDataService: BookDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBookDetail(id);
  }
  /**
   * Get book detail by id
   */
  getBookDetail = (id) => {
    this.dataSubscription = this.bookDataService.getBookDetail(id).subscribe(res => {
      this.des = res[0];
    });
  }

  ngOnDestroy() {

    if (this.dataSubscription) {

      this.dataSubscription.unsubscribe();
    }
  }
}
