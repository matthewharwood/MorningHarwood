import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class UiStateService {
  public modalState: Subject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  emit(action:string) {
    switch(action) {
      case 'MODAL_OPEN':
        this.modalState.next(action);
        break;
      case 'MODAL_CLOSE':
        this.modalState.next(action);
        break;
      default:
        break;
    }
  }

}
