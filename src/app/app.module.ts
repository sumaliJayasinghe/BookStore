import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingLayoutComponent } from './views/landing-layout/landing-layout.component';
import { HomeLayoutComponent } from './views/home-layout/home-layout.component'
import { CoreModule } from '../core/core.module';
import { MatIconModule } from '@angular/material';
import { NavMenuComponent } from '../core/nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreCommonModule } from 'src/common/common.module';
import { FeaturesModule } from 'src/features/features.module';
@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    HomeLayoutComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreCommonModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
