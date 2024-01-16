import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { UslugeSectionComponent } from './components/usluge-section/usluge-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { OnamaSectionComponent } from './components/onama-section/onama-section.component';
import { StranicaUslugeComponent } from './components/stranica-usluge/stranica-usluge.component';
import { StranicaPortfolioComponent } from './components/stranica-portfolio/stranica-portfolio.component';
import { StranicaOnamaComponent } from './components/stranica-onama/stranica-onama.component';
import { PrikazOnamaComponent } from './components/prikaz-onama/prikaz-onama.component';
import { SectionFooterComponent } from './components/section-footer/section-footer.component';
import { StranicaKontaktComponent } from './components/stranica-kontakt/stranica-kontakt.component';
import { UslugeService } from './services/usluge.service';
import { ProjektiServiceService } from './services/projekti-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    UslugeSectionComponent,
    PortfolioSectionComponent,
    OnamaSectionComponent,
    StranicaUslugeComponent,
    StranicaPortfolioComponent,
    StranicaOnamaComponent,
    PrikazOnamaComponent,
    SectionFooterComponent,
    StranicaKontaktComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UslugeService,ProjektiServiceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
