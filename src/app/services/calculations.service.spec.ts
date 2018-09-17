import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from '../components/calculator/calculator.service';

describe('CalculationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should ...', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
