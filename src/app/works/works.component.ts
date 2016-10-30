import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {

  constructor(private cameraChannel: CameraChannelService) { }

  ngOnInit() {
    this.cameraChannel.cameraPosition.subscribe((type) => {
      console.log(type);
    });
  }
}
