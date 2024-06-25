import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() search: string = ""
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>()

  get searchValue() {
    return this.search
  }

  set searchValue(value) {
    this.search = value
    this.searchChange.emit(value)
  }
}
