import { Component } from '@angular/core';

@Component({
  selector: 'app-meliquina',
  imports: [],
  templateUrl: './meliquina.component.html',
  styleUrl: './meliquina.component.css'
})
export class MeliquinaComponent {

images: string[] = [
    '/assets/images/galeria-meliquina-1.webp',
    '/assets/images/galeria-meliquina-2.webp',
    '/assets/images/galeria-meliquina-3.webp',
    '/assets/images/galeria-meliquina-4.webp', 
    '/assets/images/galeria-meliquina-5.webp',
    '/assets/images/galeria-meliquina-6.webp',
    '/assets/images/galeria-meliquina-7.webp',
    '/assets/images/galeria-meliquina-8.webp'
  ];

  currentIndex: number = 0;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }

}
