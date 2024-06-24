import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // déclaration et instanciation : (visibilité) nomDeVariable : Type = {valeur}
  @Input() titre: string = "Mon Projet"
  link: string = "/"
}
