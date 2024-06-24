import {Component, EventEmitter, Output} from '@angular/core';
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  searchValue: string = "Value"

  @Output() more: EventEmitter<string> = new EventEmitter<string>()

  // déclaration de fonction : nom(params) : type {...}
  // le type est automatiquement déduit selon le code dans le corps de la méthode
  afficher() {
    console.log("Click on More")
    this.more.emit("More")
  }
}
