import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-home-responsive4',
  templateUrl: './carousel-home-responsive4.component.html',
  styleUrls: ['./carousel-home-responsive4.component.scss']
})
export class CarouselHomeResponsive4Component implements OnInit {

  public slideConfig: any;

  constructor() {}

  public goTo(page: any) {
    // this.
  }

  ngOnInit(): void {
    this.slideConfig = {
      slidesToShow: 1.2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {

          settings: {
            slidesToShow: 3,
          },
        },
        {

          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  }

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
