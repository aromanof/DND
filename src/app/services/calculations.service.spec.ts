import { TestBed, inject } from '@angular/core/testing';

import { CalculationsService } from './calculations.service';

describe('CalculationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationsService]
    });
  });

  it('should ...', inject([CalculationsService], (service: CalculationsService) => {
    expect(service).toBeTruthy();
  }));
});
