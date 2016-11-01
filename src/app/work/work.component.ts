import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';

@Component({
  selector: 'app-works',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
})
export class WorkComponent implements OnInit {

  constructor(private cameraChannel: CameraChannelService) { }

  ngOnInit() {
    this.cameraChannel.cameraPosition.subscribe((type) => {
      console.log(type);
    });
  }
}
