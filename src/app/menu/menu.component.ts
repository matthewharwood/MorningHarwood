import { Component, OnInit } from '@angular/core';
import { CameraChannelService } from '../camera-channel.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private cameraChannel: CameraChannelService) { }

  ngOnInit() {
    this.cameraChannel.cameraPosition.subscribe((type) => {
      console.log(type);
    });
  }

}
