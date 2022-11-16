import { Component, OnInit, Input } from '@angular/core';
import { Articles } from '../models/article-models';

@Component({
  selector: 'app-article-items',
  templateUrl: './article-items.component.html',
  styleUrls: ['./article-items.component.scss']
})
export class ArticleItemsComponent implements OnInit {
  @Input() article!: Articles[]

  constructor() { }

  ngOnInit(): void {
  }

}
