import { Component, Inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent {
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

  constructor(@Inject(Router) private router: Router) {}


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToHome() {
    this.router.navigate(['/pocetna']); // Podešavanje putanje ka početnoj stranici
    this.scrollToTop(); // Pomeranje na vrh stranice
  }
  isMenuOpen = false;
  isExpanded = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isExpanded = !this.isExpanded;
  }
}

