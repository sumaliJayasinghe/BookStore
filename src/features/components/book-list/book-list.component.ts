import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BookDataService } from 'src/features/services/books-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  public displayedColumns = ['name', 'type', 'createdDate', 'updatedDate'];
  public dataSource = new MatTableDataSource([]);

  private dataSubscription: Subscription;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private bookDataService: BookDataService) { }

  ngOnInit() {
    this.getAllBooks();
  }
  /**
   * Set custom filter
   */
  setFilter = (data: any, filter: string) => {
    return (data.name.toLowerCase().indexOf(filter) !== -1) || (data.type.toLowerCase().indexOf(filter) !== -1);
  }

  /**
   * Get book list
   */
  getAllBooks = () => {
    this.dataSubscription = this.bookDataService.getBooks().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.filterPredicate = this.setFilter;
      this.dataSource.sort = this.sort;
    })
  }

  /**
   * Apply filter
   */
  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {

    if (this.dataSubscription) {

      this.dataSubscription.unsubscribe();
    }
  }

}