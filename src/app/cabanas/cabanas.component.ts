import { Component } from '@angular/core';
import { CabanaCardComponent } from './cabana-card/cabana-card.component';

export interface CabanaTipo {
  tipoNombre: string;
  capacidad: string;
  descripcion: string;
  comodidades: string[];
  opciones: {
    nombre: string;
    imagenes: string[];
  }[];
  serviciosCercanos: string[];
}
@Component({
  selector: 'app-cabanas',
  standalone: true,
  imports: [CabanaCardComponent],
  templateUrl: './cabanas.component.html',
  styleUrl: './cabanas.component.css'
})
export class CabanasComponent {
  cabanas: CabanaTipo = {
    tipoNombre: 'Cabañas Lihuen',
    capacidad: 'Hasta 4 personas',
    descripcion: 'Cabañas rústicas y acogedoras con vistas al bosque. Perfectas para familias o parejas que buscan tranquilidad.',
    comodidades: [
      'Cocina equipada',
      'Wi-Fi',
      'Estufa',
      'Agua caliente y fría',
      'TV',
      'Jardín',
      'Estacionamiento',
      'A 1km del Lago Meliquina'
    ],
    opciones: [
      {
        nombre: 'Cabaña El Maitén',
        imagenes: ['/assets/images/cabanas-2-cuadrada.webp', '/assets/images/cabanas-2.webp', '/assets/images/cabanas-3.webp']
      },
      {
        nombre: 'Cabaña Arrayán',
        imagenes: ['/assets/images/cabanas.webp', '/assets/images/cabanas.webp', '/assets/images/cabanas.webp']
      }
    ], 
    serviciosCercanos: [
      'Almacén La Esquina (a 500m)',
      'Restaurante Del Bosque (a 1km)',
      'Panadería La Gema (a 2km)',
      'Cervecería de la Montaña (a 1.5km)'
    ]
  };
}