import { Component } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ApuntesComponent } from '../apuntes/apuntes.component';
import { CommonModule } from '@angular/common';

type OptionsVisibility = {
  [key: string]: boolean; // Firma de índice para acceso dinámico
};

@Component({
  selector: 'app-main-carlos',
  standalone: true,
  imports: [SidemenuComponent, ApuntesComponent, CommonModule],
  templateUrl: './main-carlos.component.html',
  styleUrl: './main-carlos.component.css'
})
export class MainCarlosComponent {
  isOptionVisible: OptionsVisibility = {};

  // Actualiza el estado cuando se recibe el evento del sidebar
  onOptionChanged(visibleState: OptionsVisibility) {
    this.isOptionVisible = visibleState;
    console.log(this.isOptionVisible);
  }
}
