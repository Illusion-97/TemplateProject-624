import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../common/models/user";
import {AbstractFormComponent} from "../../common/components/abstract-form-component";

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
    href: new FormControl("", {
      validators: [Validators.required]
    }),
    src: new FormControl(""),
    alt: new FormControl("", {
      validators: [Validators.required]
    }),
    text: new FormControl("", {
      validators: [Validators.required]
    })
  })

  onSubmit$(): void {
    console.log("Article", this.form.value)
  }

}
