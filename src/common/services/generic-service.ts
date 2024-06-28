import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class GenericService<T> {
  abstract END_POINT: string;

  constructor(protected http: HttpClient) { }

  all(): Observable<T[]> {
    return this.http.get<T[]>(this.END_POINT)
  }

  byId(id: number): Observable<T> {
    return this.http.get<T>(`${this.END_POINT}/${id}`)
  }

  save(object: T): Observable<T> {
    return this.http.post<T>(this.END_POINT, object)
  }

  update(object: T): Observable<T> {
    return this.http.put<T>(this.END_POINT, object)
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.END_POINT}/${id}`)
  }
}
