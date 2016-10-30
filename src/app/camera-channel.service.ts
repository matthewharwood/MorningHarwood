import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CameraChannelService {
  public cameraPosition: Subject<string> = new BehaviorSubject<string>(null);

  constructor() {}

  setCamera(type:string) {
    this.cameraPosition.next(type);
  }

}
