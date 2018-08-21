import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppColorComponent } from './app-color.component';

describe('AppColorComponent', () => {
  let component: AppColorComponent;
  let fixture: ComponentFixture<AppColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
