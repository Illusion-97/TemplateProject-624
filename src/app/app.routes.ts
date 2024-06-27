import { Routes } from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {LoginComponent} from "../auth/views/login/login.component";
import {NotFoundComponent} from "../views/not-found/not-found.component";
import {authGuard} from "../auth/services/auth.service";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("../auth/auth.routes").then(m => m.routes)
  },
  {
    path: "editor",
    children: [
      {
        // un segment d'URL précédé de ':' devient une variable
        path: ":id",
        canActivate: [authGuard],
        loadComponent: () => import("../views/article-editor/article-editor.component").then(m => m.ArticleEditorComponent)
      },
      {
        path: "",
        redirectTo: "0",
        pathMatch: "prefix"
      }]
  },
  {// Attention à toujours la garder en dernier
    path: "**", // wildcard
    component: NotFoundComponent
  }
];
