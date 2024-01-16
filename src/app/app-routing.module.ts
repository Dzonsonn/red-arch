import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { StranicaUslugeComponent } from './components/stranica-usluge/stranica-usluge.component';
import { StranicaPortfolioComponent } from './components/stranica-portfolio/stranica-portfolio.component';
import { StranicaOnamaComponent } from './components/stranica-onama/stranica-onama.component';
import { StranicaKontaktComponent } from './components/stranica-kontakt/stranica-kontakt.component';

const routes: Routes = [
  { path: 'pocetna', component: PocetnaComponent },
  { path: 'usluge', component: StranicaUslugeComponent },
  { path: 'portfolio', component: StranicaPortfolioComponent },
  { path: 'o-nama', component: StranicaOnamaComponent },
  { path: 'kontakt', component: StranicaKontaktComponent },

];


//RouterModule.forRoot(routes) metoda u imports polju da se registruju definisane rute.
// exports polje se koristi za izvoz RouterModule kako bi bio dostupan u drugim delovima aplikacije.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }