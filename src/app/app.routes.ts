import { Routes } from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {LoginComponent} from "../views/login/login.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    loadComponent: () => import("../views/register/register.component").then(m => m.RegisterComponent)
  },
  {
    // un segment d'URL précédé de ':' devient une variable
    path: "editor/:id",
    loadComponent: () => import("../views/article-editor/article-editor.component").then(m => m.ArticleEditorComponent)
  }
];
