import { Component } from '@angular/core';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {HeaderComponent} from "../../components/header/header.component";
import {Article} from "../../common/models/article";
import {ArticleComponent} from "./article/article.component";

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
  articles: Article[] = [
    {
      titre: 'Interdum aenean',
      src: 'pic01.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      titre: 'Nulla amet dolore',
      src: 'pic02.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      titre: 'Tempus ullamcorper',
      src: 'pic03.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      titre: 'Sed etiam facilis',
      src: 'pic04.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      titre: 'Feugiat lorem aenean',
      src: 'pic05.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
    {
      titre: 'Amet varius aliquam',
      src: 'pic06.jpg',
      href: '#',
      alt: '',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.'
    },
  ]
}
