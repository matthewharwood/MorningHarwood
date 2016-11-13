import { Injectable } from '@angular/core';
import { POST_TABLE, WorkPosts } from '../data';

@Injectable()
export class WorkPostsService {
  private data:WorkPosts = POST_TABLE;


  constructor() { }

  getWorkData() {
    return this.data;
  }
}
