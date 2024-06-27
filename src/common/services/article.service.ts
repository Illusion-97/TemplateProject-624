import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [
    {
      id: 1,
      titre: 'Interdum aenean',
      src: 'pic01.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      id: 2,
      titre: 'Nulla amet dolore',
      src: 'pic02.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      id: 3,
      titre: 'Tempus ullamcorper',
      src: 'pic03.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      id: 4,
      titre: 'Sed etiam facilis',
      src: 'pic04.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      id: 5,
      titre: 'Feugiat lorem aenean',
      src: 'pic05.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      id: 6,
      titre: 'Amet varius aliquam',
      src: 'pic06.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
  ]
  constructor(private http: HttpClient) { }

  all(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles")
  }

  byId(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/" + id)
  }

  save(article: Article): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles", article)
  }

  update(article: Article): Observable<Article> {
    return this.http.put<Article>("http://localhost:3000/articles/" + article.id, article)
  }

  delete(id: number): Observable<Article> {
    return this.http.delete<Article>("http://localhost:3000/articles/" + id)
  }
}
