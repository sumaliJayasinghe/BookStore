import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreCommonModule } from 'src/common/common.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    StoreCommonModule
  ]
})
export class CoreModule { }
