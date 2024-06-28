import { Injectable } from '@angular/core';
import {GenericService} from "./generic-service";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User> {
  END_POINT: string = `/users`;

  override update(object: User): Observable<User> {
    return this.http.put<User>(`${this.END_POINT}/${object.id}`, object)
  }

}
