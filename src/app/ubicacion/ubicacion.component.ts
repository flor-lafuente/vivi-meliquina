import { Component } from '@angular/core';
import { SafeUrlPipe } from '../shared/safe-url.pipe';

@Component({
  selector: 'app-ubicacion',
  imports: [SafeUrlPipe],
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {
  // URLs de Google Maps para incrustar, generadas desde Google Maps
  mapUrls = {
    chalet: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1807.2684897902543!2d-71.25260312229561!3d-40.37669178731119!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1757091026889!5m2!1ses!2sus',
    cabanas: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1074.5979332522973!2d-71.25241106012213!3d-40.37734010852464!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sus!4v1757091093316!5m2!1ses!2sus'
  };

  selectedMapUrl: string = this.mapUrls.cabanas; // Por defecto, muestra el mapa de las cabañas

  // Función para cambiar el mapa
  selectMap(location: 'chalet' | 'cabanas') {
    this.selectedMapUrl = this.mapUrls[location];
  }
}