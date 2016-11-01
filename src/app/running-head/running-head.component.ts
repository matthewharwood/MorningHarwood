import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-running-head',
  templateUrl: './running-head.component.html',
  styleUrls: ['./running-head.component.scss']
})
export class RunningHeadComponent implements OnInit, OnDestroy {
  private content: Array<string>;
  private bogoInterval: number;
  public bogoCount: number = 0;
  public bogoContent: Array<string>;

  constructor() {}

  ngOnInit() {
    this.content =  [
      'the future',
      'architecture',
      'my work',
      'your work',
      'OOP vs. Functional',
      'design',
      'guitar',
      'inspirational people',
      'love',
      'travel',
      'singularity',
      'creativity',
      'creativity',
      'mixed, virtual, augmented reality',
      'art',
      'imagination',
      'problem solving',
      'space',
      'cooking',
      'FOMO',
      'ontological design',
      'flow state',
      'foreign languages',
      'streaming on the internet',
      'video games',
      'coffee'
    ];

    this.bogoContent = this.bogo(this.content);
    this.bogoInterval = this.intervalIndex();
  }

  ngOnDestroy() {
    clearInterval(this.bogoInterval);
  }

  private bogo(v:Array<string>):Array<string> {
    for(var j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
  }

  public intervalIndex():number {
    const countIntervals = () => {
      ++this.bogoCount;
      if(this.bogoCount >= this.content.length-1) {
        clearInterval(this.bogoInterval);
      }
    };

    return window.setInterval(countIntervals, 1000);
  }

}
