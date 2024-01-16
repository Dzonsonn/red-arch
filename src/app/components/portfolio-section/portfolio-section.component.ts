import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'HLEB & KIFLE',
      description: 'U našoj pekari, svaki element enterijera je pažljivo osmišljen kako bi stvorio autentično i prijatno iskustvo za naše posetioce. Inspirisan tradicionalnom estetikom pekarske industrije, enterijer odiše toplinom i šarmom. Ručno izrađeni drveni elementi donose prirodan i rustičan izgled, dok delikatno osvetljenje naglašava teksture i detalje prostora.',
      image: 'assets/images/HiK.jpg'
    },
    {
      title: 'KUĆA, ZVEČAN',
      description: 'Enterijer ove kuće je pravi spoj stilskih elemenata i funkcionalnosti. Kombinacija pažljivo odabranih boja, tekstura i materijala stvara harmoniju u prostoru. Svaka soba je osmišljena sa posebnom pažnjom prema detaljima, pružajući prostor koji odiše estetikom i praktičnošću.',
      image: 'assets/images/Zv.jpg'
    },
    {
      title: 'BW MANGOLIJA',
      description: 'Enterijer ovog stana karakterišu moderni dizajnerski komadi nameštaja, elegantne boje i pametno raspoređeni prostori za odlaganje. Otvorena kuhinja je centralna tačka, sa visokokvalitetnim uređajima i praktičnim radnim površinama, pružajući funkcionalnost i estetiku.',
      image: 'assets/images/BW.jpg'
    },
    {
      title: 'KOPAONIK',
      description: 'Dobrodošli u čarobno vikend naselje na Kopaoniku, gde se udobnost, priroda i uživanje stapaju u savršen spoj. Naselje je okruženo netaknutom prirodom i prelepim panoramskim pogledom na planinu. Prepoznatljive drvene vikendice savršeno se uklapaju u okruženje i pružaju toplinu i udobnost.',
      image: 'assets/images/Kop.jpg'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showMore(): void {
    this.router.navigate(['/portfolio']);
    window.scrollTo(0, 0); // Postavi vrh ekrana na početak nove stranice
  }
}



interface Project {
  title: string;
  description: string;
  image: string;
}

