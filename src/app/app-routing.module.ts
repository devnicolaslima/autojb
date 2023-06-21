import { EstoqueComponent } from './estoque/estoque.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { InternaCarrosComponent } from './interna-carros/interna-carros.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'estoque',
    component: EstoqueComponent
  },

  {
    path: 'contato',
    component: ContatoComponent
  },

  {
    path: 'localizacao',
    component: LocalizacaoComponent
  },

  {
    path: 'estoque/:link',
    component: InternaCarrosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
