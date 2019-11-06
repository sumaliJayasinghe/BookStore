import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    BookDetailComponent,
    BookListComponent,
    BookDataService,
    BookNewsComponent,
    BookBestSellerComponent,
    BookDescriptionDirective
} from '.';
import { StoreCommonModule } from 'src/common/common.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        StoreCommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        BookDetailComponent,
        BookListComponent,
        BookDescriptionDirective,
        BookNewsComponent,
        BookBestSellerComponent
    ],
    providers: [
        BookDataService
    ],
    exports: [
        BookDetailComponent,
        BookListComponent,
        BookBestSellerComponent,
        BookNewsComponent
    ]
})
export class FeaturesModule { }