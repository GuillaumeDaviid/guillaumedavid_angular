import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from "../models/portfolio-models"

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio!: Portfolio[]


  ngOnInit() {
    this.portfolio = [
      {
        id: 1,
        title: "01 Academie",
        link: "https://github.com/GuillaumeDaviid/01-Academie-Version-React",
        image: "assets/01academie.png"
      },
      {
        id: 2,
        title: "Netflix",
        link: "https://clone-guillaumedavid.herokuapp.com/",
        image: "assets/netflix.png"
      },
      {
        id: 3,
        title: "Commercia",
        link: "https://commercia.vercel.app/",
        image: "assets/commercia.png"
      },
      {
        id: 4,
        title: "Jeu de Dame",
        link: "https://guillaumedaviid.github.io/Checkers-Game/",
        image: "assets/checkers.png"
      },
      {
        id: 5,
        title: "Leagora",
        link: "https://visio.leagora.fr/",
        image: "assets/leagora-salle.png"
      }
    ]
  }
}
