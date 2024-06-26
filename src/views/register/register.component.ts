import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormUser, User} from "../../common/models/user";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  confirmPassword: FormControl = new FormControl<string>("")

  form: FormGroup = new FormGroup({
    id: new FormControl(0, {
      validators: [Validators.required]
    }),
    username: new FormControl("", {
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    email: new FormControl("", {
      validators: [Validators.required, Validators.email]
    })
  })

  onSubmit() {
    if(this.form.valid) this.save(this.form.value)
  }

  save(user: User) {
    console.log("User", user)
  }

  get jsonValue() {
    return JSON.stringify(this.form.value)
  }

  getControl(control: AbstractControl | string) {
    if (typeof control == "string") {
      const found = this.form.get(control)
      if (!found) throw new Error("Control introuvable")
      return found
    }
    return control
  }

  isInvalid(control: AbstractControl | string) {
    control = this.getControl(control)
    return (control.touched || control.dirty) && control.invalid
  }

  hasError(name: string, errorCode: string) {
    const control = this.getControl(name)
    return (control.touched || control.dirty) && control.hasError(errorCode)
  }
}
