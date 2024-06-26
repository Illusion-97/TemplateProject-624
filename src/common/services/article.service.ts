import { Injectable } from '@angular/core';
import {Article} from "../models/article";

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
  constructor() { }

  byId(id: number): Article | undefined {
    return this.articles.find(article => article.id === id)
  }

  save(article: Article) {
    article.id = this.articles.length + 1
    this.articles.push(article)
  }

  update(article: Article) {
    this.articles = [
      ...this.articles.filter(a => article.id !== a.id),
      article
    ]
  }

}
