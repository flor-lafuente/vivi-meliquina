import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { CabanasComponent } from './cabanas/cabanas.component';
import { ChaletComponent } from './chalet/chalet.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MeliquinaComponent } from "./meliquina/meliquina.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, InicioComponent, MeliquinaComponent, CabanasComponent, ChaletComponent, GaleriaComponent, UbicacionComponent, ContactoComponent, ReactiveFormsModule, MeliquinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'piukewen-meliquina';
}
