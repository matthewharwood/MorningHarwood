/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkPostsService } from './work-posts.service';

describe('Service: WorkPosts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkPostsService]
    });
  });

  it('should ...', inject([WorkPostsService], (service: WorkPostsService) => {
    expect(service).toBeTruthy();
  }));
});
