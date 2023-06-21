/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarouselHomeResponsive3Component } from './carousel-home-responsive3.component';

describe('CarouselHomeResponsive3Component', () => {
  let component: CarouselHomeResponsive3Component;
  let fixture: ComponentFixture<CarouselHomeResponsive3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHomeResponsive3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHomeResponsive3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
