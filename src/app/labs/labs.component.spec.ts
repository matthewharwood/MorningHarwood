/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabsComponent } from './labs.component';

describe('LabsComponent', () => {
  let component: LabsComponent;
  let fixture: ComponentFixture<LabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
