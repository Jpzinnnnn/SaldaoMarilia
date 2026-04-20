import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Início', section: 'inicio' },
    { label: 'Produtos', section: 'produtos' },
    { label: 'Promoções', section: 'promocoes' },
    { label: 'Sobre Nós', section: 'sobre' },
    { label: 'Contato', section: 'contato' },
  ];

  scrollTo(section: string): void {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
