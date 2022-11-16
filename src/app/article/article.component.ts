import { Component, OnInit } from '@angular/core';
import { Articles } from '../models/article-models'
import { Observable } from 'rxjs';
import { ArticleService } from "../services/articles.service"

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$!: Observable<Articles>;
  data:any=[]

  constructor(private articleService: ArticleService) {
    this.articleService.getAllArticles().subscribe(data => {
      console.warn(data.items)
      this.data = data.items
    })
  }

  ngOnInit(): void {
    this.article$ = this.articleService.getAllArticles()
  }
}
