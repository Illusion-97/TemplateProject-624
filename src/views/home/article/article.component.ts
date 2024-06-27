import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../../../common/models/article";
import {RouterLink} from "@angular/router";
import {ArticleService} from "../../../common/services/article.service";
import { TitleCasePipe } from '@angular/common';
import {TruncatePipe} from "../../../common/tools/truncate.pipe";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    TruncatePipe
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input({required: true}) article!: Article;
  @Output() deleted: EventEmitter<number> = new EventEmitter<number>()

  constructor(private service: ArticleService, protected auth: AuthService) {
  }

  delete() {
    this.service.delete(this.article.id).subscribe({
      next: () => this.deleted.emit(this.article.id)
    })
  }
}
