import { User } from "./../interfaces/user.interface";
import { pluck } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private API = environment.API + "users/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(this.API);
  }

  getRequests() {
    return this.http.get<User[]>(this.API + "requests");
  }

  update(user: Partial<User>): Observable<string> {
    return this.http.put(this.API, user).pipe(pluck("message"));
  }

  changePaymentType({ _id, paymentType }: User): Observable<string> {
    return this.http.put(this.API + "change-payment-type", { paymentType, _id }).pipe(pluck("message"));
  }

  toDisabled(users: User[]): Observable<string> {
    return this.changeStatus(users, false).pipe(pluck("message"));
  }

  toEnable(users: User[]): Observable<string> {
    return this.changeStatus(users, true).pipe(pluck("message"));
  }

  private changeStatus(users: User[], status: boolean) {
    const _ids = users.map((user) => user._id);
    return this.http.put(this.API + "change-status", { status, _ids });
  }

  uploadImage(file: File): Observable<string> {
    const fileData = new FormData();
    fileData.append("file", file);
    return this.http.post(this.API + "image/upload", fileData).pipe(pluck("message"));
  }
}
