import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-stranica-kontakt',
  templateUrl: './stranica-kontakt.component.html',
  styleUrls: ['./stranica-kontakt.component.css']
})
export class StranicaKontaktComponent {

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

  isMenuOpen = false;
  isExpanded = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isExpanded = !this.isExpanded;
  }


  ime: string = '';
  prezime: string = '';
  brojTelefona: string = '';
  email: string = '';
  poruka: string = '';



  resetujFormu() {
    this.ime = '';
    this.prezime = '';
    this.brojTelefona = '';
    this.email = '';
    this.poruka = '';
    // Resetovanje forme na početne vrednosti
    const modal = document.getElementById('porukaModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }




  zatvoriPoruku() {
    const modal = document.getElementById('porukaModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
