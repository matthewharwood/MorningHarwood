import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UiStateService } from "../ui-state.service";
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnDestroy {
  constructor(private uiStateService_:UiStateService) { }

  ngOnInit() {
    this.uiStateService_.emit('MODAL_OPEN');
  }

  ngOnDestroy() {
    this.uiStateService_.emit('MODAL_CLOSE');
  }
}
