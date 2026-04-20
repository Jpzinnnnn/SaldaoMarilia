import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  channels = [
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '(14) 99167-7085',
      desc: 'Atendimento rápido e direto',
      color: '#25D366',
      link: 'https://wa.me/5514991677085?text=Olá!%20Gostaria%20de%20mais%20informações.'
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      value: '@saldaomarilia',
      desc: 'Siga e veja as novidades',
      color: '#E1306C',
      link: 'https://instagram.com/saldaomarilia'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Endereço',
      value: 'Av. Sampaio Vidal, 734',
      desc: 'Centro, Marília/SP',
      color: '#FFD600',
      link: 'https://maps.google.com/?q=Av.+Sampaio+Vidal,+734,+Marília,+SP'
    },
  ];

  openWhatsapp(): void {
    window.open('https://wa.me/5514991677085?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20promoções!', '_blank');
  }
}
