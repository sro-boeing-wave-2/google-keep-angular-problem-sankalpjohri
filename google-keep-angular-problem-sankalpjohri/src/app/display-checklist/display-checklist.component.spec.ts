import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChecklistComponent } from './display-checklist.component';

describe('DisplayChecklistComponent', () => {
  let component: DisplayChecklistComponent;
  let fixture: ComponentFixture<DisplayChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
