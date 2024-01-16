import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onama-section',
  templateUrl: './onama-section.component.html',
  styleUrls: ['./onama-section.component.css']
})
export class OnamaSectionComponent implements OnInit{
  aboutDescription: string = 'RedArch Studio je biro koji se bavi arhitekturom i projektovanjem, sa fokusom na uređenje stambenih i poslovnih prostora, kao i uredjenjem eksterijera. Naša vizija je stvaranje inspirativnih i funkcionalnih prostora koji istovremeno odražavaju estetiku i zadovoljavaju potrebe korisnika. Bilo da se radi o modernim stambenim objektima, luksuznim poslovnim prostorima ili prefinjenim enterijerima, naša stručnost u projektovanju i dizajnu garantuje izvanredne rezultate.';
  aboutImage: string = '/assets/images/onamaps.png';
  aboutImageAlt: string = 'Opis slike';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showMore(): void {
    this.router.navigate(['/o-nama']);
    window.scrollTo(0, 0); // Postavi vrh ekrana na početak nove stranice
  }
}
