import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-float.component.html',
  styleUrls: ['./whatsapp-float.component.scss']
})
export class WhatsappFloatComponent {
  isVisible = false;
  showTooltip = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isVisible = window.scrollY > 300;
  }

  openWhatsapp(): void {
    window.open(
      'https://wa.me/5514991677085?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20promoções!',
      '_blank'
    );
  }
}
