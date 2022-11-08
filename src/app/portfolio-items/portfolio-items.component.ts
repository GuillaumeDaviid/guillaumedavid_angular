import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../models/portfolio-models';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {
  @Input() portfolio!: Portfolio

  constructor() { }

  ngOnInit(): void {
  }

}
