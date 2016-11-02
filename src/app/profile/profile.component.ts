import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private cameraChannel: CameraChannelService) { }

  ngOnInit() {
    this.cameraChannel.setCamera('PROFILE');
  }

}
