import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipViewComponent } from './chip-view.component';

describe('ChipViewComponent', () => {
  let component: ChipViewComponent;
  let fixture: ComponentFixture<ChipViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
