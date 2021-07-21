import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage = "url('../../../assets/images/got-iron-throne.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
  }

  ngOnDestroy () {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundSize = "";
    document.body.style.backgroundPosition = "";
  }

}
