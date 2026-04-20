import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit, OnDestroy {
  // Countdown timer
  timeLeft = { hours: 0, minutes: 0, seconds: 0 };
  private timerInterval: any;

  banners = [
    {
      title: 'Mega Saldão da Semana',
      subtitle: 'Até 70% de desconto em toda a loja',
      description: 'Aproveite os melhores preços do ano! Estoque limitado.',
      icon: 'fas fa-fire',
      color: '#FF1744',
      bg: 'promo-red',
      cta: 'Aproveitar Agora'
    },
    {
      title: 'Leve 3 e Pague 2',
      subtitle: 'Em toda linha de camisetas',
      description: 'Compre 3 peças e pague apenas 2. Válido enquanto durar o estoque.',
      icon: 'fas fa-tags',
      color: '#FFD600',
      bg: 'promo-yellow',
      cta: 'Ver Camisetas'
    },
    {
      title: 'Novidades Toda Semana',
      subtitle: 'Lançamentos em moda masculina, feminina e infantil',
      description: 'Siga o @saldaomarilia e fique por dentro de todas as novidades.',
      icon: 'fas fa-star',
      color: '#fff',
      bg: 'promo-dark',
      cta: 'Ver Instagram'
    },
    {
      title: 'Estoque Limitado!',
      subtitle: 'Peças selecionadas com desconto especial',
      description: 'Últimas unidades disponíveis. Garanta o seu antes que acabe!',
      icon: 'fas fa-bolt',
      color: '#FF6F00',
      bg: 'promo-orange',
      cta: 'Garantir o Meu'
    }
  ];

  ngOnInit(): void {
    this.setCountdown();
    this.timerInterval = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  private setCountdown(): void {
    // Countdown to end of day
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 0);
    const diff = endOfDay.getTime() - now.getTime();
    this.timeLeft = {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000)
    };
  }

  private tick(): void {
    if (this.timeLeft.seconds > 0) {
      this.timeLeft.seconds--;
    } else if (this.timeLeft.minutes > 0) {
      this.timeLeft.minutes--;
      this.timeLeft.seconds = 59;
    } else if (this.timeLeft.hours > 0) {
      this.timeLeft.hours--;
      this.timeLeft.minutes = 59;
      this.timeLeft.seconds = 59;
    }
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }

  openWhatsapp(): void {
    window.open('https://wa.me/5514991677085?text=Olá!%20Vi%20as%20promoções%20e%20gostaria%20de%20saber%20mais!', '_blank');
  }
}
