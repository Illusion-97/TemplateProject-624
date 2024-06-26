import {FormControl} from "@angular/forms";

export interface User {
  id: number
  username: string
  password: string
  email: string
}

export interface FormUser {
  id: FormControl<number>
  username: FormControl<string>
  password: FormControl<string>
  email: FormControl<string>
}
