/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventAppComponent } from './event-app.component';

describe('EventAppComponent', () => {
  let component: EventAppComponent;
  let fixture: ComponentFixture<EventAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
