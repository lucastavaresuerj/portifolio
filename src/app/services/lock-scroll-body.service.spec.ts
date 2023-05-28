import { TestBed } from '@angular/core/testing';

import { LockScrollBodyService } from './lock-scroll-body.service';

describe('LockScrollBodyService', () => {
  let service: LockScrollBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockScrollBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
