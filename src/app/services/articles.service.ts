import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/article-models'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) {}



  getAllArticles(): Observable<Articles> {
    return this.http.get<Articles>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@guillaumedaavid', httpOptions);
  }



}