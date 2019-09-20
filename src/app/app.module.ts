import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServicosComponent } from './servicos/servicos.component';
import { SecoesComponent } from './secoes/secoes.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { IndexComponent } from './index/index.component';
import { HeaderEMenuComponent } from './header-e-menu/header-e-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'secoes', component: SecoesComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'promocoes', component: PromocoesComponent },
  { path: 'profissionais', component: ProfissionaisComponent },
  { path: 'nossos-servicos', component: NossosServicosComponent },
  { path: 'header-e-menu', component: HeaderEMenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'blog', component: BlogComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    SecoesComponent,
    QuemSomosComponent,
    PromocoesComponent,
    ProfissionaisComponent,
    NossosServicosComponent,
    IndexComponent,
    HeaderEMenuComponent,
    FooterComponent,
    ContatoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
