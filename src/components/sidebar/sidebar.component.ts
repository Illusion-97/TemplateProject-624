import {Component, EventEmitter, inject, Output} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {NgForOf} from "@angular/common";
import {ArticleComponent} from "./article/article.component";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SearchComponent,
    NgForOf,
    ArticleComponent,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  searchValue: string = "Value"
  @Output() more: EventEmitter<string> = new EventEmitter<string>()


  href: string = "#"
  src: string = "pic07.jpg"
  alt: string = ""
  text: string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."

  minipost1: MiniPostClass = new MiniPostClass("#", "pic07.jpg", "", this.text)
  minipost2: MiniPostClassWithDefaults = new MiniPostClassWithDefaults()
  minipost3: MiniPost = {
    href: "#",
    alt: '',
    text: this.text
  }

  miniposts : MiniPost[] = [
    {
      href: "#",
      src: "pic08.jpg",
      alt: '',
      text: this.text
    },
    {
      href: "#",
      src: "pic09.jpg",
      alt: '',
      text: this.text
    },
    {
      href: "#",
      src: "",
      alt: '',
      text: this.text
    }
  ]

  // déclaration de fonction : nom(params) : type {...}
  // le type est automatiquement déduit selon le code dans le corps de la méthode
  afficher() {
    console.log("Click on More")
    this.more.emit("More")
  }

  protected service: AuthService = inject(AuthService)
}

export interface MiniPost {
  href: string
  // src: string | undefined
  src?: string
  alt: string
  text: string
}

class MiniPostClass {
  href: string
  src: string
  alt: string
  text: string


  constructor(href: string, src: string, alt: string, text: string) {
    this.href = href;
    this.src = src;
    this.alt = alt;
    this.text = text;
  }
}

class MiniPostClassWithDefaults {
  href: string = ""
  src: string = ""
  alt: string = ""
  text: string = ""
}
