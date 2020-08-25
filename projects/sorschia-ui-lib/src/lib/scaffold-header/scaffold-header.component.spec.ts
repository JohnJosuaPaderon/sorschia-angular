import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldHeaderComponent } from './scaffold-header.component';

describe('ScaffoldHeaderComponent', () => {
  let component: ScaffoldHeaderComponent;
  let fixture: ComponentFixture<ScaffoldHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaffoldHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
