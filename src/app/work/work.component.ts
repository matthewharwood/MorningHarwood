import { Component, OnInit, HostBinding } from '@angular/core';
import { WorkPostsService } from "./work-posts.service";
import { UiStateService } from "../ui-state.service";

@Component({
  selector: 'app-works',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.scss'],
})
export class WorkComponent implements OnInit {
  @HostBinding('class.overlay-open') modalState: string = 'MODAL_OPEN';
  public posts = [];

  constructor(
      private _workPostsService: WorkPostsService,
      private _uiStateService: UiStateService
  ) {
    this.modalState = this.modalState || undefined;
  }

  ngOnInit() {
    this.posts = this._workPostsService.getWorkData().data;

    this._uiStateService.modalState.subscribe((event)=> {
      console.log(this.modalState);
      this.modalState = event;
    });
  }
}
