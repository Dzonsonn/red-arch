import { Component, OnInit, HostListener } from '@angular/core';
import { ProjektiServiceService } from 'src/app/services/projekti-service.service';
import { Projekat } from 'src/app/models/projekat';

@Component({
  selector: 'app-stranica-portfolio',
  templateUrl: './stranica-portfolio.component.html',
  styleUrls: ['./stranica-portfolio.component.css']
})
export class StranicaPortfolioComponent {

  projekti: Projekat[] = [];
  trenutniProjekat: Projekat | undefined;
prikaziSlikeProjekta: boolean = false;
trenutnaSlikaIndex: number = 0;

  constructor(private projektiService: ProjektiServiceService) { }

  ngOnInit(): void {
    this.projektiService.getProjekti().subscribe(data => {
      if (data.projekti) {
        this.projekti = data.projekti;
      }
    });
  }

  prikaziSlike(projekat: Projekat): void {
    this.trenutniProjekat = projekat;
    this.prikaziSlikeProjekta = true;
    this.trenutnaSlikaIndex = 0;
  }
  prethodnaSlika(): void {
    if (this.trenutniProjekat && this.trenutniProjekat.slike.length > 1) {
      this.trenutnaSlikaIndex = (this.trenutnaSlikaIndex - 1 + this.trenutniProjekat.slike.length) % this.trenutniProjekat.slike.length;

    }
  }
  
  sledecaSlika(): void {
    if (this.trenutniProjekat && this.trenutniProjekat.slike.length > 1) {
      this.trenutnaSlikaIndex = (this.trenutnaSlikaIndex + 1) % this.trenutniProjekat.slike.length;

    }
  }
  
  zatvoriOverlay(): void {
    this.trenutniProjekat = undefined;
    this.prikaziSlikeProjekta = false;
  }
  
  //
  
  isScrolling: boolean = false;
isScrolled: boolean = false;
isHovered: boolean = false;
timeout: any;

@HostListener('window:scroll')
onWindowScroll() {
  this.isScrolling = true;
  this.showNavigation();
  clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {
    this.isScrolling = false;
    this.hideNavigation();
  }, 1500);
}

showNavigation() {
  if (this.isScrolling || this.isHovered) {
    this.isScrolled = true;
  }
}

hideNavigation() {
  if (!this.isScrolling && !this.isHovered) {
    this.isScrolled = false;
  }
}

onNavigationHover() {
  this.isHovered = true;
  this.showNavigation();
}

onNavigationLeave() {
  this.isHovered = false;
  this.hideNavigation();
}
scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//
  
  isMenuOpen = false;
  isExpanded = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isExpanded = !this.isExpanded;
  }
}
