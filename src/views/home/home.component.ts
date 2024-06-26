import {Component, inject} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {HeaderComponent} from "../../components/header/header.component";
import {Article} from "../../common/models/article";
import {ArticleComponent} from "./article/article.component";
import {ArticleService} from "../../common/services/article.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    ArticleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articles : Article[] = inject(ArticleService).articles
}
