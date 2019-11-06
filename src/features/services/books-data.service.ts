import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any> {
    return this.http.get('assets/mockData/books.json')
      .pipe(
        map((res: any) => {

          const books = res.data;

          return books.map(item => {

            return {
              id: item.id,
              name: item.attributes.content,
              type: item.attributes.display_properties.type,
              start: item.attributes.created_at,
              update: item.attributes.updated_at,
              img: item.attributes.display_properties.image
            }
          });
        })
      );
  }

  public getBookDetail(id): Observable<any> {
    return this.http.get('assets/mockData/books.json')
      .pipe(
        map((res: any) => {

          const books = res.data;

          return books.map(item => {

            return {
              id: item.id,
              name: item.attributes.content,
              type: item.attributes.display_properties.type,
              start: item.attributes.created_at,
              update: item.attributes.updated_at,
              img: item.attributes.display_properties.image
            }
          }).filter(element => parseInt(element.id) == id);
        })
      );
  }
}
