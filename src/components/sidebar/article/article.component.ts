import {Component, Input} from '@angular/core';
import {MiniPost} from "../sidebar.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  // ! apres un nom de variable indique que la donnée ne sera pas undefined. ATTENTION à prévoir le nécessaire
  // pour éviter des erreurs (ici le {required: true})
  @Input({required: true}) post!: MiniPost;
}
