import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  public responsive: boolean = false;
  public bannerSelected: any;
  public bannerSelectedIndex: any;
  public innerWidth: any;


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

  selectBanner(val: number) {
    this.bannerSelected = this.banners[val];
    this.bannerSelectedIndex = val;
  }

}
