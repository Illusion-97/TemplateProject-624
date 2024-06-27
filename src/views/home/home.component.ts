import {Component, inject} from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {HeaderComponent} from "../../components/header/header.component";
import {Article} from "../../common/models/article";
import {ArticleComponent} from "./article/article.component";
import {ArticleService} from "../../common/services/article.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    ArticleComponent,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //articles : Article[] = []
  protected service: ArticleService = inject(ArticleService)
  articles$: Observable<Article[]> = this.service.all()
/*
  constructor(private service: ArticleService) {
    this.getAll();
    this.articles$ = service.all()
  }

  getAll(id?: number) {
    if(id) console.log("Article id deleted:", id)
    //this.service.all().subscribe(response => this.articles = response)
    this.articles$ = this.service.all()
  }*/
}
