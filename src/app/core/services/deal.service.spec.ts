import { TestBed, inject } from '@angular/core/testing';

import { DealService } from './deal.service';
import { HttpClientModule } from '@angular/common/http';

describe('DealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([DealService], (service: DealService) => {
    expect(service).toBeTruthy();
  }));
});
