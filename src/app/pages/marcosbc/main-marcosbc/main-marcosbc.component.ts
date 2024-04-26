import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ApuntesComponent } from '../apuntes/apuntes.component';

type OptionsVisibility = {
  [key: string]: boolean; // Firma de índice para acceso dinámico
};

@Component({
  selector: 'app-main-marcosbc',
  standalone: true,
  imports: [SidemenuComponent, ApuntesComponent, CommonModule],
  templateUrl: './main-marcosbc.component.html',
  styleUrl: './main-marcosbc.component.css'
})
export class MainMarcosbcComponent {
  isOptionVisible: OptionsVisibility = {};

  // Actualiza el estado cuando se recibe el evento del sidebar
  onOptionChanged(visibleState: OptionsVisibility) {
    this.isOptionVisible = visibleState;
    console.log(this.isOptionVisible);
  }
}
