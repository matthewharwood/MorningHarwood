import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  constructor(private cameraChannel: CameraChannelService) { }

  ngOnInit() {
    this.cameraChannel.setCamera('LAB');
  }

}
