import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './views/landing-layout/landing-layout.component';
import { HomeLayoutComponent } from './views/home-layout/home-layout.component';
import { BookListComponent, BookDetailComponent, BookBestSellerComponent, BookNewsComponent } from 'src/features';


const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent
  },
  {
    path: 'books',
    component: HomeLayoutComponent,
    data: { animation: 'Books' },
    children: [
      {
        path: '',
        component: BookListComponent,

      },
      {
        path: ':id',
        component: BookDetailComponent
      }
    ]
  }, {
    path: 'bestseller',
    component: HomeLayoutComponent,
    data: { animation: 'BestSeller' },
    children: [
      {
        path: '',
        component: BookBestSellerComponent
      }
    ]
  },
  {
    path: 'booknews',
    component: HomeLayoutComponent,
    data: { animation: 'News' },
    children: [
      {
        path: '',
        component: BookNewsComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
