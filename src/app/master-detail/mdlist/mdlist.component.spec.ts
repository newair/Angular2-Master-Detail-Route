/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MDListComponent } from './mdlist.component';

describe('MDListComponent', () => {
  let component: MDListComponent;
  let fixture: ComponentFixture<MDListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
