import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { dummyText } from './'


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
    autoWidth: true





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

  dummyText = [{
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's printer took a galley of type and Scrambled it to make a type and
  typesetting industry.
  Lorem Ipsum has been the book.`,
    subject: "Jane Doe",
    place: "US",
    image: "../../assets/owl/slide3.jpg"

  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's printer took a galley of type and Scrambled it to make a type and
  typesetting industry.
  Lorem Ipsum has been the book.`,
    subject: "Jane Doe",
    place: "US",
    image: "../../assets/owl/slide3.jpg"
  },]






}
