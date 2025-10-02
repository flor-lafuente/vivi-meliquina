import { Component } from '@angular/core';

export interface Chalet {
  nombre: string;
  capacidad: string;
  descripcion: string;
  comodidades: string[];
  imagenes: string[];
  serviciosCercanos: string[];
}

@Component({
  selector: 'app-chalet',
  imports: [],
  templateUrl: './chalet.component.html',
  styleUrls: ['./chalet.component.css']
})
export class ChaletComponent {
  chalet: Chalet = {
    nombre: 'Piukewen',
    capacidad: 'Hasta 8 personas',
    descripcion: 'Un chalet de lujo con vistas panorámicas al lago y las montañas. Cuenta con un diseño moderno, grandes ventanales y todas las comodidades para una estadía inolvidable.',
    comodidades: ['Estacionamiento privado', 'Jardín', 'Parrilla', 'Cocina completa', 'Wi-Fi', 'Calefacción', 'TV', 'Lavarropas', 'A 700m del Lago Meliquina'],
    imagenes: ['/assets/images/piukewen-6.webp', '/assets/images/piukewen-2.webp', '/assets/images/piukewen-3.webp', '/assets/images/piukewen-4.webp', '/assets/images/piukewen-5.webp', '/assets/images/piukewen-7.webp', '/assets/images/piukewen-8.webp', '/assets/images/piukewen-9.webp', '/assets/images/piukewen-10.webp', '/assets/images/piukewen-11.webp', '/assets/images/piukewen-12.webp', '/assets/images/piukewen-13.webp', '/assets/images/piukewen-14.webp', '/assets/images/piukewen-15.webp'], 
    serviciosCercanos: [
      'Restaurante Los Robles (a 800m)',
      'Tienda de Montaña (a 1km)',
      'Supermercado (a 2km)',
      'Parada de bus (a 300m)'
    ]
  };

  currentIndex: number = 0;

  nextImage(): void {
    const totalImages = this.chalet.imagenes.length;
    this.currentIndex = (this.currentIndex + 1) % totalImages;
  }

  prevImage(): void {
    const totalImages = this.chalet.imagenes.length;
    this.currentIndex = (this.currentIndex - 1 + totalImages) % totalImages;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }
}