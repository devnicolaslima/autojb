/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarouselHomeResponsive4Component } from './carousel-home-responsive4.component';

describe('CarouselHomeResponsive4Component', () => {
  let component: CarouselHomeResponsive4Component;
  let fixture: ComponentFixture<CarouselHomeResponsive4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHomeResponsive4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHomeResponsive4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
