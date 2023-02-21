import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface AuthInterface {
  email: string,
  password: string
}

export interface UserInterface extends AuthInterface {
  name: string,
  createdDate: Date,
  isAdmin?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = 'https://eshopangular-88d74-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  login(credentials: AuthInterface): Observable<any> {
    return this.http.get(`${this.url}/users.json`)
  }

  registration(credentials: AuthInterface): Observable<any> {
    let newUser: UserInterface = {
      email: credentials.email,
      name: credentials.email,
      password: credentials.password,
      createdDate: new Date()
    }

    return this.http.post<any>(`${this.url}/users.json`, newUser)
  }

  isAuth(secretKey: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/users.json`)
      .pipe(
        map(response => response[secretKey as keyof object] !== undefined)
      )
  }

  isAdmin(secretKey: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/users.json`)
      .pipe(
        map(response => response[secretKey as keyof object]?.['isAdmin'] === true)
      )
  }

  setCookieSecretKey(secretKey: string) {
    document.cookie = `eshopSecretKey=${JSON.stringify(secretKey)}`
  }

  getCookieSecretKey(): string {
    let key: string = document.cookie?.match(`eshopSecretKey`)?.input?.split('=')[1] || '{}'
    return JSON.parse(key)
  }
}
