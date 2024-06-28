import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../common/models/user";
import {AbstractFormComponent} from "../../common/components/abstract-form-component";
import {ArticleService} from "../../common/services/article.service";
import {ActivatedRoute, ResolveFn, Router} from "@angular/router";
import {catchError, first, of} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Article} from "../../common/models/article";

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
    titre: new FormControl("", {
      validators: [Validators.required]
    }),
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

  constructor(private service: ArticleService, private router: Router, route: ActivatedRoute) {
    super();
    // takeUntilDestroyed surveille les changements tant que le composant est présent sur la page
    /*route.paramMap.pipe(takeUntilDestroyed()).subscribe(map => {
      const id = parseInt(map.get('id') ?? "0")
      //.pipe(first()) sur un observable déclenche 'complete' après la première réponse
      // Objectif -> libérer la mémoire d'une souscription
      service.byId(id).pipe(first()).subscribe({
        next: response => {
          if(response) this.form.patchValue(response)
        },
        error: () => this.form.reset({
          id: 0,
          titre: "New",
          href: "#",
          src: "pic07.jpg",
          alt: "Halte",
          text: "Lorem"
        })
      })
    })*/

    route.data.pipe(takeUntilDestroyed()).subscribe(data => {
      const article = data['article']
      if(article) this.form.patchValue(article)
      else this.form.reset({
        id: 0,
        titre: "New",
        href: "#",
        src: "pic07.jpg",
        alt: "Halte",
        text: "Lorem"
      })
    })
  }
  onSubmit$(): void {
    /*if (this.form.value.id)
      this.service.update(this.form.value).subscribe(() => this.router.navigate(['/home']))
    else
      this.service.save(this.form.value).subscribe(() => this.router.navigate(['/home']))*/

    const obs = this.form.value.id
      ? this.service.update(this.form.value)
      : this.service.save(this.form.value)

    obs.subscribe(() => this.router.navigate(['/home']))

     /* (this.form.value.id
        ? this.service.update(this.form.value)
        : this.service.save(this.form.value)).subscribe(() => this.router.navigate(['/home']))*/
  }
}

export const articleResolver: ResolveFn<Article | undefined> = route => {
  const id = parseInt(route.paramMap.get('id') ?? "0")
  return id ? inject(ArticleService).byId(id).pipe(
      first(),
      // catchError permet de gérer une erreur avant la gestion 'éventuellement' prévue dans un subscribe
      catchError(err => {
        // of() de rxjs permet de créer un Observable de la valeur passée en paramètre
        return of(undefined)
      })
    ) : undefined
}
