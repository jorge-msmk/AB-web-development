import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { GitComponent } from '../components/git/git.component';
import { CommonModule } from '@angular/common';
import { ProgramacionComponent } from '../components/programacion/programacion.component';
import { AngularComponent } from '../components/angular/angular.component';

type OptionsVisibility = {
  [key: string]: boolean; 
};

@Component({
  selector: 'app-apuntes',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [ProgramacionComponent, GitComponent, AngularComponent, CommonModule],
  templateUrl: './apuntes.component.html',
  styleUrl: './apuntes.component.css'
})
export class ApuntesComponent {
  @Input() optionShow!: OptionsVisibility;
  

}
