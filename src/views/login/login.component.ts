import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ""
  password: string = ""

  get credentials(): Credentials {
    return {
      email: this.email,
      password: this.password
    }
  }

  set credentials(value) {
    this.email = value.email
    this.password = value.password
  }

  login(form: HTMLFormElement) {
    if(form.checkValidity())
      console.log("CREDENTIALS : ",this.credentials)
  }

  get jsonValue() {
    return JSON.stringify(this.credentials)
  }
}

export interface Credentials {
  email: string;
  password: string;
}
