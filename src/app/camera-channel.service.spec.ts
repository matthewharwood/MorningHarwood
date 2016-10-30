/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CameraChannelService } from './camera-channel.service';

describe('Service: CameraChannel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CameraChannelService]
    });
  });

  it('should ...', inject([CameraChannelService], (service: CameraChannelService) => {
    expect(service).toBeTruthy();
  }));
});
