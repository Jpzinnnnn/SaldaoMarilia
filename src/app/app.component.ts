import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProductsComponent,
    PromotionsComponent,
    ReviewsComponent,
    AboutComponent,
    LocationComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFloatComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-products></app-products>
      <app-promotions></app-promotions>
      <app-reviews></app-reviews>
      <app-about></app-about>
      <app-location></app-location>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <app-whatsapp-float></app-whatsapp-float>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'saldao-marilia';

  ngAfterViewInit(): void {
    this.initScrollReveal();
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));
  }
}
