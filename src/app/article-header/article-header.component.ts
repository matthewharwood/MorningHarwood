import { Component, OnInit, Input } from '@angular/core';
import { WorkPost } from "../data";

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() post: WorkPost;
  constructor() { }

  ngOnInit() {}
}
