import { pluck } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  private API = environment.API + "comments/";
  constructor(private http: HttpClient) {}

  approve(user: User): Observable<string> {
    return this.http.post(this.API + "visible/", { ...user, visible: true }).pipe(pluck("message"));
  }
  disapprove(user: User): Observable<string> {
    return this.http.post(this.API + "visible/", { ...user, visible: false }).pipe(pluck("message"));
  }
}
