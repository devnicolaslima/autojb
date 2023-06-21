import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interna-carros',
  templateUrl: './interna-carros.component.html',
  styleUrls: ['./interna-carros.component.scss']
})
export class InternaCarrosComponent implements OnInit {

  public selectedNR: any;
  public responsive: boolean = false;
  public bannerSelected: any;
  public bannerSelectedIndex: any;
  public innerWidth: any;
  public foto: any;
  public formationSelected = 1;

  constructor(public _router: Router, ) {

    let url = this._router.url.split('/');

    this.selectedNR = url[url.length - 1].split('-', 1).toString();

    this.bannerSelected = this.banners[0];
    this.bannerSelectedIndex = 0;

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

  selectFormation(val: number) {
    this.formationSelected = val;
  }

  ngOnInit() {

    this.foto = 1

    this.innerWidth = window.innerWidth;

  }

  avancar(){
    if(this.foto < 8){
      this.foto = this.foto + 1
    }else{
      this.foto = 1
    }
  }

  voltar(){
    if(this.foto > 1){
      this.foto = this.foto - 1
    }else{
      this.foto = 8
    }
  }

  selectBanner(val: number) {
    this.bannerSelected = this.banners[val];
    this.bannerSelectedIndex = val;
  }

  nextBanner() {
    this.bannerSelectedIndex = (this.bannerSelectedIndex + 1) % this.banners.length;
  }

  previousBanner() {
    this.bannerSelectedIndex = (this.bannerSelectedIndex + this.banners.length - 1) % this.banners.length;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
  this.innerWidth = window.innerWidth;
}

  abrir(){
    if(this.responsive === false){
      this.responsive = true
    }else{
      this.responsive = false
    }

    console.log(this.responsive)
  }


  public title: any = {
    TORO: {
      title: 'FIAT TORO RANCH',
      foto1:'assets/toro1.png',
      foto2:'assets/toro2.png',
      foto3:'assets/toro3.png',
      foto4:'assets/toro4.png',
      foto5:'assets/toro5.png',
      foto6:'assets/toro6.png',
      foto7:'assets/toro7.png',
      foto8:'assets/toro8.png',

      marca:'FIAT',
      modelo:'TORO RANCH',
      ano:'2020',
      cor:'PRATA',
      cambio:'AUTOMÁTICO',
      km:'00.000',
      combustivel:'DIESEL',
      valor:'R$160.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',

    },
    SPACEFOX: {
      title: 'VOLKSWAGEN SPACEFOX',
      foto1:'assets/space1.svg',
      foto2:'assets/space2.svg',
      foto3:'assets/space3.png',
      foto4:'assets/space4.png',
      foto5:'assets/space5.png',
      foto6:'assets/space6.png',
      foto7:'assets/space7.png',
      foto8:'assets/space8.png',

      marca:'VOLKSWAGEN',
      modelo:'SPACEFOX',
      ano:'',
      cor:'PRATA',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 57.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    AMAROK: {
      title: 'VOLKSWAGEN AMAROK SE',
      foto1:'assets/amarok1.png',
      foto2:'assets/amarok2.png',
      foto3:'assets/amarok3.png',
      foto4:'assets/amarok4.png',
      foto5:'assets/amarok5.png',
      foto6:'assets/amarok6.png',
      foto7:'assets/amarok7.png',
      foto8:'assets/amarok8.png',

      marca:'VOLKSWAGEN',
      modelo:'AMAROK SE',
      ano:'',
      cor:'PRATA',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'DIESEL',
      valor:'R$ 95.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    JETTA: {
      title: 'VOLKSWAGEN JETTA',
      foto1:'assets/jetta1.png',
      foto2:'assets/jetta2.png',
      foto3:'assets/jetta3.png',
      foto4:'assets/jetta4.png',
      foto5:'assets/jetta5.png',
      foto6:'assets/jetta6.png',
      foto7:'assets/jetta7.png',
      foto8:'assets/jetta8.png',

      marca:'VOLKSWAGEN',
      modelo:'JETTA',
      ano:'2008',
      cor:'PRATA',
      cambio:'AUTOMÁTICO',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 45.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    PATHFINDER: {
      title: 'NISSAN PATHFINDER',
      foto1:'assets/pathfinder1.png',
      foto2:'assets/pathfinder2.png',
      foto3:'assets/pathfinder3.png',
      foto4:'assets/pathfinder4.png',
      foto5:'assets/pathfinder5.png',
      foto6:'assets/pathfinder6.png',
      foto7:'assets/pathfinder7.png',
      foto8:'assets/pathfinder8.png',

      marca:'NISSAN',
      modelo:'PATHFINDER',
      ano:'2008',
      cor:'PRATA',
      cambio:'AUTOMÁTICO',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 82.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    DUSTER: {
      title: 'RENAULT DUSTER EXPRESS',
      foto1:'assets/duster1.png',
      foto2:'assets/duster2.png',
      foto3:'assets/duster3.png',
      foto4:'assets/duster4.png',
      foto5:'assets/duster5.png',
      foto6:'assets/duster6.png',
      foto7:'assets/duster7.png',
      foto8:'assets/duster8.png',

      marca:'RENAULT',
      modelo:'DUSTER EXPRESS',
      ano:'2008',
      cor:'PRATA',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 69.990,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    ARGO: {
      title: 'FIAT ARGO TREKKING',
      foto1:'assets/argo1.png',
      foto2:'assets/argo2.png',
      foto3:'assets/argo3.png',
      foto4:'assets/argo4.png',
      foto5:'assets/argo5.png',
      foto6:'assets/argo6.png',
      foto7:'assets/argo7.png',
      foto8:'assets/argo8.png',

      marca:'FIAT',
      modelo:'ARGO TREKKING',
      ano:'2008',
      cor:'PRATA',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 72.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    ZAFIRA: {
      title: 'CHEVROLET ZAFIRA ELITE',
      foto1:'assets/zafira1.png',
      foto2:'assets/zafira2.png',
      foto3:'assets/zafira3.png',
      foto4:'assets/zafira4.png',
      foto5:'assets/zafira5.png',
      foto6:'assets/zafira6.png',
      foto7:'assets/zafira7.png',
      foto8:'assets/zafira8.png',

      marca:'CHEVROLET',
      modelo:'ZAFIRA ELITE',
      ano:'2008',
      cor:'PRATA',
      cambio:'AUTOMÁTICO',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 36.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    FIESTA: {
      title: 'FORD FIESTA',
      foto1:'assets/fiesta1.png',
      foto2:'assets/fiesta2.png',
      foto3:'assets/fiesta3.png',
      foto4:'assets/fiesta4.png',
      foto5:'assets/fiesta5.png',
      foto6:'assets/fiesta6.png',
      foto7:'assets/fiesta7.png',
      foto8:'assets/fiesta8.png',

      marca:'FORD',
      modelo:'FIESTA',
      ano:'2008',
      cor:'PRATA',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 34.000,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    FUSCA: {
      title: 'VOLKSWAGEN FUSCA 1300L',
      foto1:'assets/fusca1.png',
      foto2:'assets/fusca2.png',
      foto3:'assets/fusca3.png',
      foto4:'assets/fusca4.png',
      foto5:'assets/fusca5.png',
      foto6:'assets/fusca6.png',
      foto7:'assets/fusca7.png',
      foto8:'assets/fusca8.png',

      marca:'VOLKSWAGEN',
      modelo:'FUSCA 1300L',
      ano:'2008',
      cor:'AZUL',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 19.990,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    PAMPA: {
      title: 'FORD PAMPA L',
      foto1:'assets/pampa1.png',
      foto2:'assets/pampa2.png',
      foto3:'assets/pampa3.png',
      foto4:'assets/pampa4.png',
      foto5:'assets/pampa5.png',
      foto6:'assets/pampa6.png',
      foto7:'assets/pampa7.png',
      foto8:'assets/pampa8.png',

      marca:'FORD',
      modelo:'PAMPA L',
      ano:'2008',
      cor:'AZUL',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 29.990,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
    DOBLO: {
      title: 'FIAT DOBLO',
      foto1:'assets/doblo1.png',
      foto2:'assets/doblo2.png',
      foto3:'assets/doblo3.png',
      foto4:'assets/doblo4.png',
      foto5:'assets/doblo5.png',
      foto6:'assets/doblo6.png',
      foto7:'assets/doblo7.png',
      foto8:'assets/doblo8.png',

      marca:'FIAT',
      modelo:'DOBLO',
      ano:'2008',
      cor:'AZUL',
      cambio:'MANUAL',
      km:'00.000',
      combustivel:'GASOLINA',
      valor:'R$ 48.500,00',

      info1: '',
      info2: '',
      info3: '',
      info4: '',
      info5: '',
      info6: '',
      info7: '',
      info8: '',
    },
  }

}
