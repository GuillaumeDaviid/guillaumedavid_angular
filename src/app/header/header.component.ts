import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.nav = !this.nav;
  }

  

}
