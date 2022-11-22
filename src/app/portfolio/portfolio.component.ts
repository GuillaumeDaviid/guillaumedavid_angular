import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Portfolio } from "../core/models/portfolio-models"
import { PortfolioService } from '../core/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio!: Portfolio[]


  constructor(public PortfolioService: PortfolioService) { }


  ngOnInit() {
    this.portfolio = [
      {
        id: 1,
        title: "01 Academie",
        link: "https://github.com/GuillaumeDaviid/01-Academie-Version-React",
        image: "assets/01academie.png",
        category: "full"
      },
      {
        id: 2,
        title: "Netflix",
        link: "https://clone-guillaumedavid.herokuapp.com/",
        image: "assets/netflix.png",
        category: "front"
      },
      {
        id: 3,
        title: "Commercia",
        link: "https://commercia.vercel.app/",
        image: "assets/commercia.png",
        category: "front"
      },
      {
        id: 4,
        title: "Jeu de Dame",
        link: "https://guillaumedaviid.github.io/Checkers-Game/",
        image: "assets/checkers.png",
        category: "front"
      },
      {
        id: 5,
        title: "Leagora",
        link: "https://visio.leagora.fr/",
        image: "assets/leagora-salle.png",
        category: "front"
      }
    ]
  }
}
