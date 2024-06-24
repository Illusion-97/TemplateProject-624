import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
 @Input() search: string = ""
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>()

  onInput(eventValue: Event) {
   const target = eventValue.target as HTMLInputElement
    this.search = target.value
    this.searchChange.emit(this.search)
  }
}
