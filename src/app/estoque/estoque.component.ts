import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  public responsive: boolean = false;
  public bannerSelected: any;
  public bannerSelectedIndex: any;
  public innerWidth: any;
  public formationSelected = 1;

  constructor() {
    this.bannerSelected = this.banners[0];
    this.bannerSelectedIndex = 0;
  }

  ngOnInit() {

    this.innerWidth = window.innerWidth;

    this.responsive = false



  }

  @HostListener('window:resize', ['$event'])
  onResize() {
  this.innerWidth = window.innerWidth;
}

  abrirLink(): void {
    window.open('https://www.google.com/maps/place/AUTO+JB/@-29.931451,-51.0880416,17z/data=!4m6!3m5!1s0x951973a7b86023e7:0x24c98ba299e6676b!8m2!3d-29.9299719!4d-51.0865501!16s%2Fg%2F11q1s7pmrz?entry=ttu', '_blank');
  }

  nextBanner() {
    this.bannerSelectedIndex = (this.bannerSelectedIndex + 1) % this.banners.length;
  }

  abrir(){
    if(this.responsive === false){
      this.responsive = true
    }else{
      this.responsive = false
    }

    console.log(this.responsive)
  }

  selectBanner(val: number) {
    this.bannerSelected = this.banners[val];
    this.bannerSelectedIndex = val;
  }

  previousBanner() {
    this.bannerSelectedIndex = (this.bannerSelectedIndex + this.banners.length - 1) % this.banners.length;
  }

  public banners: any[] = [
    {
      alt: 'pessoa capacitadas',
      url: '/servicos/treinamentos',
      link: '/normas'
    },
    {
      alt: 'alunas em sala de aula',
      url: '/normas',
      link: '/normas'

    },
    {
      title: 'Confira nosso\nblog com conteúdos\nexclusivos',
      alt: 'professor em sala de aula',
      url: 'https://www.sesirs.org.br/blog-sesi-saude',
      link: 'https://www.sesirs.org.br/blog-sesi-saude'

    },
    // {
    //   title: 'Unidades Móveis\nde Normas\nRegulamentadoras',
    //   alt: 'professor em sala de aula',
    //   url: '/blog',
    // },
  ];

  public carros: any[] = [
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

    {
      title: 'ZAFIRA ELITE',
      description: 'AUTOMÁTICO',
      img: 'assets/zafira.png',
      alt: 'normas tecnicas',
      link: 'ZAFIRA',
      value: 'R$ 36.000,00',
    },

    {
      title: 'FIESTA',
      description: 'MANUAL',
      img: 'assets/fiesta.png',
      alt: 'normas tecnicas',
      link: 'FIESTA',
      value: 'R$ 34.000,00',
    },

    {
      title: 'FUSCA 1300L',
      description: 'MANUAL',
      img: 'assets/fusca.png',
      alt: 'normas tecnicas',
      link: 'FUSCA',
      value: 'R$ 19.990,00',
    },

    {
      title: 'PAMPA L',
      description: 'MANUAL',
      img: 'assets/pampa.png',
      alt: 'normas tecnicas',
      link: 'PAMPA',
      value: 'R$ 29.990,00',
    },

    {
      title: 'DOBLO',
      description: 'MANUAL',
      img: 'assets/doblo.png',
      alt: 'normas tecnicas',
      link: 'DOBLO',
      value: 'R$ 48.500,00',
    },

  ];

  public motos: any[] = [

  ];

  selectFormation(val: number) {
    this.formationSelected = val;
  }


}
