import { CurrentUser } from "./../interfaces/auth.interface";
import { JwtService } from "./jwt.service";
import { ResponseOk } from "./../interfaces/server-response.interface";
import { StorageTokenService } from "./storage-token.service";
import { Injectable } from "@angular/core";
import { ReplaySubject, Observable, BehaviorSubject } from "rxjs";
import { pluck, tap } from "rxjs/operators";
import { UserLogin } from "../interfaces/auth.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { Role } from "../enums/roles.enum";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggin$: BehaviorSubject<boolean>;
  private currentProfile$: ReplaySubject<User> = new ReplaySubject();
  private API = environment.API + "auth/";

  constructor(private http: HttpClient, private storageToken: StorageTokenService, private jwtService: JwtService) {
    let initialState = storageToken.has();

    if (initialState) {
      this.updateProfile();
    }
    this.isLoggin$ = new BehaviorSubject(initialState);
  }

  get isLoggin(): Observable<boolean> {
    return this.isLoggin$.asObservable();
  }

  get isLogginValue(): boolean {
    return this.isLoggin$.value;
  }

  get currentProfile() {
    return this.currentProfile$.asObservable();
  }

  async updateProfile() {
    this.http.get<User>(this.API + "profile").subscribe((user) => {
      this.currentProfile$.next(user);
      this.isLoggin$.next(true);
    });
  }

  login(user: UserLogin) {
    return this.http.post<ResponseOk & { token: string }>(this.API + "login", user).pipe(
      tap(({ token }) => {
        const user: CurrentUser = this.jwtService.decode(token);
        if (user.role === Role.ADMIN) {
          this.storageToken.set(token);
          location.reload();
        } else {
          throw "No autorizado";
        }
      }),
      pluck("message")
    );
  }

  logOut(): void {
    this.storageToken.remove();
    location.reload();
  }

  newPassword(password: string, token: string) {
    return this.http
      .post<ResponseOk>(this.API + "new-password/" + token, {
        password,
      })
      .pipe(pluck("message"));
  }

  recoverPassword(email: string) {
    return this.http
      .post<ResponseOk>(this.API + "forgot-password", {
        email,
      })
      .pipe(pluck("message"));
  }

  requestAccount(user: User, verified: boolean): Observable<string> {
    return this.http.post(this.API + "verify-account/", { _id: user._id, verified }).pipe(pluck("message"));
  }
}
