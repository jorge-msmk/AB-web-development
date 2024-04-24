import { Component, EventEmitter, Output } from '@angular/core';

type OptionsVisibility = {
  [key: string]: boolean; 
};

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  @Output() optionChanged = new EventEmitter<OptionsVisibility>(); 

   // Controlar la visibilidad de cada opción
   isOptionVisible: OptionsVisibility = {
    htmlCssJs: false,
    angular: false,
    git: false,
    terminal: false,
    programacion: false
  };

  // Alterna la visibilidad de la opción seleccionada
  toggleOption(option: string) {
    //Reinicia el valor inicial 
    this.isOptionVisible = {
      htmlCssJs: false,
      angular: false,
      git: false,
      terminal: false,
      programacion: false
    };

    this.isOptionVisible[option] = !this.isOptionVisible[option];
    this.optionChanged.emit(this.isOptionVisible);
    
  }


}
