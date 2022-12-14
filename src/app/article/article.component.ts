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

  article$!: Observable<Articles>
  data:any=[];
  nbr: number = 1;
  p: number = 0;

  constructor(private articleService: ArticleService) {
    this.articleService.getAllArticles().subscribe(data => {
      console.warn(data.items)
      this.data = data.items
    })
  }

  ngOnInit(): void {
    this.article$ = this.articleService.getAllArticles()
  }

   handleClickNext() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (this.nbr < 8){
            this.nbr ++;
            this.p --;
            carrousel.style.transform = "translate("+this.p*25+"vw)";
            carrousel.style.transition = "all 0.5s ease";
        }
    }
   }

     handleClickPrevious() {
        let carrousel = document.getElementById('carrousel');
        if (carrousel){
      if (this.nbr > 1){
        this.nbr --;
        this.p ++;
      carrousel.style.transform = "translate("+this.p*25+"vw)";
      carrousel.style.transition = "all 0.5s ease";
      }
      
        }
    }
}
