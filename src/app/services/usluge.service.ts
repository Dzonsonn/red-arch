/*Komunikacija sa serverom radi dohvatanja podataka o uslugama */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usluga } from '../models/usluga';

@Injectable({ //Ovaj dekorator se koristi za označavanje da je UslugeService servis koji je dostupan na nivou celokupne aplikacije.
  providedIn: 'root'
})
export class UslugeService {

  private uslugeUrl = 'assets/data/usluge.json';

  constructor(private http: HttpClient) { }

  getUsluge(): Observable<Usluga[]> { //Ova metoda se koristi za dohvatanje usluga sa servera. Vraća Observable objekat koji emituje niz Usluga
    return this.http.get<{ usluge: Usluga[] }>(this.uslugeUrl).pipe(
      map(response => response.usluge)
    );
  }
}
