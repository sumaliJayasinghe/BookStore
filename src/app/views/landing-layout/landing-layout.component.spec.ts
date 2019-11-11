import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutComponent } from './landing-layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoreCommonModule } from 'src/common/common.module';
import { Component } from '@angular/core';
@Component({ selector: 'app-home-layout', template: '' })
class HomeLayoutComponent { }
describe('LandingLayoutComponent', () => {
  let component: LandingLayoutComponent;
  let fixture: ComponentFixture<LandingLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingLayoutComponent, HomeLayoutComponent],
      imports: [AppRoutingModule, StoreCommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
