import { TestBed } from '@angular/core/testing';

import { OnlineUpsService } from './online-ups.service';

describe('OnlineUpsService', () => {
  let service: OnlineUpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineUpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
