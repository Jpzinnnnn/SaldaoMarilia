import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  openMaps(): void {
    window.open('https://maps.google.com/?q=Av.+Sampaio+Vidal,+734,+Marília,+SP', '_blank');
  }
}
