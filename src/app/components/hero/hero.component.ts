import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollTo(section: string): void {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  stats = [
    { value: '10+', label: 'Anos de Experiência' },
    { value: '5mil+', label: 'Clientes Satisfeitos' },
    { value: '1000+', label: 'Produtos em Estoque' },
    { value: '100%', label: 'Preço Justo' },
  ];
}
