import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorschiaApiClientLibComponent } from './sorschia-api-client-lib.component';

describe('SorschiaApiClientLibComponent', () => {
  let component: SorschiaApiClientLibComponent;
  let fixture: ComponentFixture<SorschiaApiClientLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorschiaApiClientLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorschiaApiClientLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
