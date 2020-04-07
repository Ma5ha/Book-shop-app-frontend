import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,

    dots: true,
    navSpeed: 700,
    items: 1,



  }


  slides = [{
    id: 1,
    image: "../../assets/owl/slide1.jpg"
  },
  {
    id: 2,
    image: "../../assets/owl/slide2.jpg"
  },
  {
    id: 3,
    image: "../../assets/owl/slide3.jpg"
  },
  ]






}
