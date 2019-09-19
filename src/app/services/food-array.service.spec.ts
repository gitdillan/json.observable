import { TestBed } from '@angular/core/testing';

import { FoodArrayService } from './food-array.service';

describe('FoodArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodArrayService = TestBed.get(FoodArrayService);
    expect(service).toBeTruthy();
  });
});
