import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { GitComponent } from '../components/git/git.component';
import { CommonModule } from '@angular/common';
import { ProgramacionComponent } from '../components/programacion/programacion.component';
import { AngularComponent } from '../components/angular/angular.component';
import { HtmlCssJsComponent } from '../components/html-css-js/html-css-js.component';
import { TerminalComponent } from '../components/terminal/terminal.component';

type OptionsVisibility = {
  [key: string]: boolean; 
};

@Component({
  selector: 'app-apuntes',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [ProgramacionComponent, GitComponent, AngularComponent, CommonModule, ApuntesComponent, HtmlCssJsComponent, TerminalComponent],
  templateUrl: './apuntes.component.html',
  styleUrl: './apuntes.component.css'
})
export class ApuntesComponent {
  @Input() optionShow!: OptionsVisibility;

}
