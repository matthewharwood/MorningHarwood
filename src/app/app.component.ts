import { Component } from '@angular/core';
import { UiStateService } from "./ui-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private uiStateService_:UiStateService) {}

  ngOnInit() {
    this.uiStateService_.modalState.subscribe((event)=> {
      console.log(event, 'event');
    });
  }
}
