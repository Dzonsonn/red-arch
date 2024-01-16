import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-stranica-onama',
  templateUrl: './stranica-onama.component.html',
  styleUrls: ['./stranica-onama.component.css']
})
export class StranicaOnamaComponent {
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

  tim: any[] = [
    {
      imePrezime: 'Jasmin Redzović',
      zvanje: 'Diplomirani inženjer arhitekture',
      slika: '/assets/images/jasmin.png'
    },
    {
      imePrezime: 'Luka Redzović',
      zvanje: 'Master inženjer arhitekture',
      slika: '/assets/images/luka.png'
    },
    {
      imePrezime: 'Zlatko Redzović',
      zvanje: 'Master inženjer arhitekture',
      slika: '/assets/images/zlatko.png'
    }
  ];
}
