import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "./generic-service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends GenericService<Article> {

  END_POINT: string = `/articles`

  constructor(http: HttpClient) {
    super(http)
  }

  override update(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.END_POINT}/${article.id}`, article)
  }

}
