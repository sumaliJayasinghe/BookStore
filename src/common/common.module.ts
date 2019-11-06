import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatRippleModule, 
  MatSortModule, 
  MatTableModule,
  MatButtonModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatRippleModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatInputModule
  ],
  exports: [
    MatRippleModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatInputModule
  ],
})
export class StoreCommonModule { }
