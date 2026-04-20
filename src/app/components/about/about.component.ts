import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { icon: 'fas fa-tshirt', title: 'Moda Completa', desc: 'Masculino, feminino e infantil em um só lugar.' },
    { icon: 'fas fa-tag', title: 'Preço Justo', desc: 'Os melhores preços de moda em Marília/SP.' },
    { icon: 'fas fa-sync-alt', title: 'Novidades Sempre', desc: 'Estoque renovado toda semana com lançamentos.' },
    { icon: 'fas fa-heart', title: 'Atendimento Especial', desc: 'Equipe pronta para te ajudar a escolher.' },
  ];
}
