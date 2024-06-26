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
  }
];
