import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../common/models/user";
import {AbstractFormComponent} from "../../common/components/abstract-form-component";
import {ArticleService} from "../../common/services/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.css'
})
export class ArticleEditorComponent extends AbstractFormComponent{

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    titre: new FormControl("New", {
      validators: [Validators.required]
    }),
    href: new FormControl("ref", {
      validators: [Validators.required]
    }),
    src: new FormControl("pic07.jpg"),
    alt: new FormControl("rep", {
      validators: [Validators.required]
    }),
    text: new FormControl("contenu", {
      validators: [Validators.required]
    })
  })

  constructor(private service: ArticleService, private router: Router, route: ActivatedRoute) {
    super();
    const id = parseInt(route.snapshot.paramMap.get('id') ?? "0")
    const article = service.byId(id)
    if(article) this.form.patchValue(article)
  }


  onSubmit$(): void {
    if (this.form.value.id)
      this.service.update(this.form.value)
    else
      this.service.save(this.form.value)

    this.router.navigate(['/home'])
  }

}
