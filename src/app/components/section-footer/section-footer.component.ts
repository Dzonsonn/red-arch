import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.css']
})
export class SectionFooterComponent {
  constructor(@Inject(Router) private router: Router) {}


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToHome() {
    this.router.navigate(['/']); // Podešavanje putanje ka početnoj stranici
    this.scrollToTop(); // Pomeranje na vrh stranice
  }
}
