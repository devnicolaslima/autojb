import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import mapboxgl from 'mapbox-gl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ContatoComponent } from './contato/contato.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { CarouselHomeResponsiveComponent } from './carousel-home-responsive/carousel-home-responsive.component';
import { CarouselHomeResponsive2Component } from './carousel-home-responsive2/carousel-home-responsive2.component';
import { CarouselHomeResponsive3Component } from './carousel-home-responsive3/carousel-home-responsive3.component';
import { CarouselHomeResponsive4Component } from './carousel-home-responsive4/carousel-home-responsive4.component';
import { InternaCarrosComponent } from './interna-carros/interna-carros.component';
import { CarouselCarsComponent } from './carousel-cars/carousel-cars.component';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbWJpcTMyIiwiYSI6ImNsaTVicTNwMjBkdmwzZHBjeXF2cm1zd3cifQ.6luiVXkBcBm4PXWcFC2u1Q';

@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      EstoqueComponent,
      ContatoComponent,
      LocalizacaoComponent,
      QuemSomosComponent,
      CarouselHomeComponent,
      CarouselHomeResponsiveComponent,
      CarouselHomeResponsive2Component,
      CarouselHomeResponsive3Component,
      CarouselHomeResponsive4Component,
      InternaCarrosComponent,
      CarouselCarsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
