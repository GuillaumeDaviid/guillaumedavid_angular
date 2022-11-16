import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Portfolio } from '../models/portfolio-models';
import { PortfolioService } from '../services/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit, OnDestroy {
  $category!: Subscription;
  category!: string;
  @Input() portfolio!: Portfolio

  constructor(private PortfolioService: PortfolioService) { }

  ngOnDestroy(): void {
    if (this.$category) this.$category.unsubscribe();
  }

  ngOnInit(): void {
    this.$category = this.PortfolioService.currentCategory.subscribe((message:any) => {
      this.category = message;
    });
    console.log(this.$category)
  }
}
