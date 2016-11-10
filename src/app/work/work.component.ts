import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';
import { WorkPostsService } from "../data/work-posts.service";
import { WorkPosts } from "../data/work-post";

@Component({
  selector: 'app-works',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
})
export class WorkComponent implements OnInit {
  public posts = [];

  constructor(
      private cameraChannel: CameraChannelService,
      private _workPostsService: WorkPostsService
  ) { }

  ngOnInit() {
    this.cameraChannel.setCamera('WORK');
    this.posts = this._workPostsService.getWorkData().data;
    console.log(this.post);
  }
}
