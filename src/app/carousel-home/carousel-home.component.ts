import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {

  public slideConfig: any;

  constructor() { }

  ngOnInit(): void {

    this.slideConfig = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  }

  public slides: any[] = [];

  public cards: any[] = [
    {
      title: 'TORO RANCH',
      description: 'AUTOMÁTICO',
      img: 'assets/toro.png',
      alt: 'normas tecnicas',
      link: 'TORO',
      value: 'R$ 160.000,00',
    },
    {
      title: 'SPACEFOX',
      description: 'MANUAL',
      img: 'assets/space.png',
      alt: 'normas tecnicas',
      link: 'SPACEFOX',
      value: 'R$ 57.000,00',
    },
    {
      title: 'AMAROK SE',
      description: 'MANUAL',
      img: 'assets/amarok.png',
      alt: 'normas tecnicas',
      link: 'AMAROK',
      value: 'R$ 95.000,00',
    },
    {
      title: 'JETTA',
      description: 'AUTOMÁTICO',
      img: 'assets/jetta.png',
      alt: 'normas tecnicas',
      link: 'JETTA',
      value: 'R$ 45.000,00',
    },
    {
      title: 'PATHFINDER',
      description: 'AUTOMÁTICO',
      img: 'assets/pathfinder.png',
      alt: 'normas tecnicas',
      link: 'PATHFINDER',
      value: 'R$ 82.000,00',
    },
    {
      title: 'DUSTER EXPRESS',
      description: 'MANUAL',
      img: 'assets/duster.png',
      alt: 'normas tecnicas',
      link: 'DUSTER',
      value: 'R$ 69.990,00',
    },

    {
      title: 'ARGO TREKKING',
      description: 'MANUAL',
      img: 'assets/argo.png',
      alt: 'normas tecnicas',
      link: 'ARGO',
      value: 'R$ 72.000,00',
    },


  ];

}
