import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorschiaLibComponent } from './sorschia-lib.component';

describe('SorschiaLibComponent', () => {
  let component: SorschiaLibComponent;
  let fixture: ComponentFixture<SorschiaLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorschiaLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorschiaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
