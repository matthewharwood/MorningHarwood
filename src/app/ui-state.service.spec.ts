/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UiStateService } from './ui-state.service';

describe('Service: UiState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiStateService]
    });
  });

  it('should ...', inject([UiStateService], (service: UiStateService) => {
    expect(service).toBeTruthy();
  }));
});
