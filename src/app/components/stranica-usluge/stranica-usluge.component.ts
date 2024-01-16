import { Component, OnInit, HostListener } from '@angular/core';
import { Service, Usluga } from 'src/app/models/usluga';
import { UslugeService } from 'src/app/services/usluge.service';



@Component({
  selector: 'app-stranica-usluge',
  templateUrl: './stranica-usluge.component.html',
  styleUrls: ['./stranica-usluge.component.css']
})
export class StranicaUslugeComponent implements OnInit {

  usluge: Usluga[] = [];
  prikaziFormu = false;
  ime: string = '';
  prezime: string = '';
  brojTelefona: string = '';
  mail: string = '';
  izabranaUsluga: Usluga | undefined;
  izabraniPaket: string = '';
  kvadrati: number = 0;
  brojRadova: number = 0;

  services: Service[] = [
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
      title: 'Renderi'
    }
  ];

  constructor(private uslugeService: UslugeService) { }
 //trebam da pozovem getUsluge kako bih dohvatio usluge sa servera i da se pretplatim na observ..
  ngOnInit(): void {
    this.uslugeService.getUsluge().subscribe(usluge => {
      this.usluge = usluge;
    });
  }

  getServiceImage(imeUsluge: string): string {
    const service = this.services.find(s => s.title === imeUsluge);
    return service ? service.image : '';
  }

  /* Prikazivanje forme */

  prikaziFormuu(imeUsluge: string, paket: any) {
    this.izabranaUsluga = this.usluge.find(usluga => usluga.ime === imeUsluge); //callback  za pronalaženje objekta usluga u nizu this.usluge čije svojstvo ime odgovara vrednosti imeUsluge.
    this.izabraniPaket = paket.naziv;
    this.prikaziFormu = true;
  }

  izaberiUslugu(usluga: Usluga) {
    if (this.izabranaUsluga !== usluga) {
      this.resetForm();
    }
    this.izabranaUsluga = usluga;
  }

  posaljiFormu() {
    this.resetForm();
    const modal = document.getElementById('porukaModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  resetForm() {
    this.ime = '';
    this.prezime = '';
    this.brojTelefona = '';
    this.mail = '';
    this.izabranaUsluga = undefined;
    this.izabraniPaket = '';
    this.prikaziFormu = false;
    this.kvadrati = 0;
    this.brojRadova = 0;

   
  }

  zatvoriPoruku() {
    const modal = document.getElementById('porukaModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  /* Racun cena */
  prikaziCenu(): void {
    const paket = this.izabranaUsluga?.paketi.find(p => p.naziv === this.izabraniPaket);
    if (paket) {
      const cena =  paket.cena;
      console.log('Cena:',  cena);
    }
  }

  getCena(): number {
    const paket = this.izabranaUsluga?.paketi.find(p => p.naziv === this.izabraniPaket);
    if (paket) {
      const cena = paket.cena;
      if (this.izabranaUsluga?.ime === 'Dizajn') {
        const ukupnaCena = cena * this.brojRadova;
        return ukupnaCena;
      } else if (this.izabranaUsluga?.ime === 'Renderi') {
        // Cena je jednaka ceni paketa
        return cena;
      } else {
        const ukupnaCena = cena * this.kvadrati;
        return ukupnaCena;
      }
    }
    return 0;
  }
  /*---------------- */
 

  /* Prikaz poruke */
  isUslugaSelected(imeUsluge: string): boolean {
    return this.izabranaUsluga?.ime === imeUsluge;
  }
  
  showCenaMessage(): boolean {
    if (this.isUslugaSelected('Projektovanje') || this.isUslugaSelected('Idejni projekti') || this.isUslugaSelected('Enterijer')) {
      return !this.kvadrati;
    }
    if (this.isUslugaSelected('Dizajn')) {
      return !this.brojRadova;
    }
    return false;
  }
  
  getCenaMessage(): string {
    if (this.isUslugaSelected('Projektovanje') || this.isUslugaSelected('Idejni projekti') || this.isUslugaSelected('Enterijer')) {
      return 'Cena se izračunava na osnovu unetih kvadrata. Unesite broj kvadrata.';
    }
    if (this.isUslugaSelected('Dizajn')) {
      return 'Cena se izračunava na osnovu unetih broja radova. Unesite broj radova.';
    }
    return '';
  }
  /*------ */

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
}
