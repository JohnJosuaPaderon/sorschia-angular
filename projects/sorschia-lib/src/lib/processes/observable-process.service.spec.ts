import { TestBed } from '@angular/core/testing';

import { ObservableProcessService } from './observable-process.service';

describe('ObservableProcessService', () => {
  let service: ObservableProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
