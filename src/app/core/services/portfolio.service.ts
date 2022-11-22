import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private category = new BehaviorSubject<string>('');
  currentCategory = this.category.asObservable();

  constructor() {this.category.next("all")}

  changeCategory(message:string) {
    this.category.next(message);
  }

}