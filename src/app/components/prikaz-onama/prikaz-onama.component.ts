import { Component } from '@angular/core';

@Component({
  selector: 'app-prikaz-onama',
  templateUrl: './prikaz-onama.component.html',
  styleUrls: ['./prikaz-onama.component.css']
})
export class PrikazOnamaComponent {
  aboutDescription: string = 'RedArch Studio je biro koji se bavi arhitekturom i projektovanjem, sa fokusom na uređenje stambenih i poslovnih prostora, kao i uredjenjem eksterijera. Naša vizija je stvaranje inspirativnih i funkcionalnih prostora koji istovremeno odražavaju estetiku i zadovoljavaju potrebe korisnika. Bilo da se radi o modernim stambenim objektima, luksuznim poslovnim prostorima ili prefinjenim enterijerima, naša stručnost u projektovanju i dizajnu garantuje izvanredne rezultate.';
  aboutImage: string = '/assets/images/onamaps.png';
  aboutImageAlt: string = 'Opis slike';
}
