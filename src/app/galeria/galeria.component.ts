import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  galerias = {
    cabana1: [
      '/assets/images/cabanas-1.webp',
      '/assets/images/cabanas-2.webp',
      '/assets/images/cabanas-3.webp'
    ],
    cabana2: [
      '/assets/images/cabana2-1.jpg',
      '/assets/images/cabana2-2.jpg',
      '/assets/images/cabana2-3.jpg'
    ],
    chalet: [
      '/assets/images/piukewen-1.webp',
      '/assets/images/piukewen-2.webp',
      '/assets/images/piukewen-3.webp',
      '/assets/images/piukewen-4.webp', 
      '/assets/images/piukewen-5.webp',
      '/assets/images/piukewen-6.webp',
      '/assets/images/piukewen-7.webp',
      '/assets/images/piukewen-8.webp',
      '/assets/images/piukewen-9.webp',
      '/assets/images/piukewen-10.webp',
      '/assets/images/piukewen-11.webp',
      '/assets/images/piukewen-12.webp',
      '/assets/images/piukewen-13.webp',
      '/assets/images/piukewen-14.webp',
      '/assets/images/piukewen-15.webp',
    ],
    general: [
      '/assets/images/galeria-meliquina-1.webp',
      '/assets/images/galeria-meliquina-2.webp',
      '/assets/images/galeria-meliquina-3.webp',
      '/assets/images/galeria-meliquina-4.webp',
      '/assets/images/galeria-meliquina-5.webp',
      '/assets/images/galeria-meliquina-6.webp', 
      '/assets/images/galeria-meliquina-7.webp',
      '/assets/images/galeria-meliquina-8.webp',
    ]
  };

  activeGallery: string[] = [];
  selectedImage: string | null = null;
  isLoading: boolean = false; // Variable para controlar el estado de carga

  ngOnInit() {
    this.showGallery('general'); // Muestra la galería general al inicio
  }

  showGallery(galleryName: 'cabana1' | 'cabana2' | 'chalet' | 'general') {
    this.isLoading = true; // Activa el loader

    // Simula un retardo de carga para que el loader sea visible
    setTimeout(() => {
      this.activeGallery = this.galerias[galleryName];
      this.isLoading = false; // Desactiva el loader una vez que las fotos se "cargan"
    }, 500); // 500 milisegundos de retardo
  }
}