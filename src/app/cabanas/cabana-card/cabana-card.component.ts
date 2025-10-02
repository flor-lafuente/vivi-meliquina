import { Component, Input, OnInit } from '@angular/core';
import { CabanaTipo } from '../cabanas.component';

@Component({
  selector: 'app-cabana-card',
  standalone: true,
  imports: [],
  templateUrl: './cabana-card.component.html',
  styleUrls: ['./cabana-card.component.css']
})
export class CabanaCardComponent implements OnInit {
  @Input() cabanaTipo!: CabanaTipo;
  
  currentIndex: number = 0;

  ngOnInit(): void {
    // Si en un futuro hay más de una cabaña, esto se puede manejar con botones
    // Por ahora, solo tenemos una, por lo que no es necesario el manejo de selectedCabanaIndex
  }

  nextImage(): void {
    const totalImages = this.cabanaTipo.opciones[0].imagenes.length;
    this.currentIndex = (this.currentIndex + 1) % totalImages;
  }

  prevImage(): void {
    const totalImages = this.cabanaTipo.opciones[0].imagenes.length;
    this.currentIndex = (this.currentIndex - 1 + totalImages) % totalImages;
  }

  goToImage(index: number): void {
    this.currentIndex = index;
  }
}