import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    OnInit
} from '@angular/core';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ActionBtnComponent implements OnInit {
  private hero = 'inactive';

  constructor() {}

  toggleState() {
    this.hero === 'active' ? this.hero = 'inactive' : this.hero = 'active';
  }

  ngOnInit() {
    this.hero = 'active';
  }

}
