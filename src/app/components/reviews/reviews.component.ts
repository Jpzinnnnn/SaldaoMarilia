import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  product: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Ana Clara S.',
      avatar: 'AC',
      rating: 5,
      text: 'Comprei várias camisetas e fiquei impressionada com o preço e a qualidade! A loja é muito organizada e os atendentes são super atenciosos. Com certeza voltarei mais vezes.',
      date: 'Janeiro 2026',
      product: 'Camisetas'
    },
    {
      name: 'João Paulo M.',
      avatar: 'JP',
      rating: 5,
      text: 'Encontrei um tênis excelente por apenas R$ 49,99! Qualidade ótima, super confortável. O Saldão Marília é o melhor custo-benefício da cidade. Super recomendo!',
      date: 'Dezembro 2025',
      product: 'Tênis'
    },
    {
      name: 'Fernanda R.',
      avatar: 'FR',
      rating: 5,
      text: 'Sempre que preciso de roupa vou no Saldão Marília. Preços incríveis, variedade enorme e sempre tem promoção. Comprei calça jeans por R$ 49,99 e é maravilhosa!',
      date: 'Fevereiro 2026',
      product: 'Calça Jeans'
    },
    {
      name: 'Carlos D.',
      avatar: 'CD',
      rating: 5,
      text: 'Melhor loja de roupas de Marília! Compro lá faz anos. Os preços são realmente muito bons e a qualidade surpreende. Indico para todo mundo!',
      date: 'Março 2026',
      product: 'Roupas em Geral'
    },
    {
      name: 'Mariana T.',
      avatar: 'MT',
      rating: 5,
      text: 'Comprei roupas para toda a família e gastei muito pouco. Moda infantil com preços ótimos! O atendimento pelo WhatsApp foi super rápido e eficiente.',
      date: 'Março 2026',
      product: 'Moda Infantil'
    },
    {
      name: 'Roberto L.',
      avatar: 'RL',
      rating: 4,
      text: 'Boa variedade de produtos e preços honestos. Já comprei diversas peças lá e nunca me decepcionei. A loja sempre está bem abastecida com novidades.',
      date: 'Abril 2026',
      product: 'Roupas Masculinas'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getAvatarColor(initial: string): string {
    const colors = ['#FF1744', '#FFD600', '#2196F3', '#4CAF50', '#9C27B0', '#FF6F00'];
    return colors[initial.charCodeAt(0) % colors.length];
  }
}
