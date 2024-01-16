import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usluge-section',
  templateUrl: './usluge-section.component.html',
  styleUrls: ['./usluge-section.component.css']
})
export class UslugeSectionComponent {
  services = [
    {
      image: '/assets/images/projektovanje.png',
      title: 'Projektovanje'
    },
    {
      image: '/assets/images/idejni.png',
      title: 'Idejni projekti'
    },
    {
      image: '/assets/images/enterijer.png',
      title: 'Enterijer'
    },
    {
      image: '/assets/images/dizajn.png',
      title: 'Dizajn'
    },
    {
      image: '/assets/images/render.png',
      title: 'Renderi i 3d modelovanje'
    }
  ];

  constructor(private router: Router) {}
  showMore(): void {
    this.router.navigate(['/usluge']);
    window.scrollTo(0, 0); // Postavi vrh ekrana na početak nove stranice
  }
}
