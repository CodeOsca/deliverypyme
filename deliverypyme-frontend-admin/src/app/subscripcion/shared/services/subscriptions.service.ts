import { Observable } from "rxjs";
import { Subscription } from "./../interfaces/subscription.interface";
import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SubscriptionsService {
  private API = environment.API + "subscriptions/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Subscription[]>(this.API);
  }

  getOne(_id: string) {
    return this.http.get<Subscription>(this.API + _id);
  }
  getAllInRevision() {
    return this.http.get<Subscription[]>(this.API + "revision");
  }

  getAllNotPayed() {
    return this.http.get<Subscription[]>(this.API + "not-payed");
  }

  acceptedPaid(subscription: Partial<Subscription>): Observable<string> {
    return this.http.post(this.API + "accepted-paid", { _id: subscription._id }).pipe(pluck("message"));
  }

  rejectedPaid(subscription: Partial<Subscription>): Observable<string> {
    return this.http.post(this.API + "rejected-paid", { _id: subscription._id }).pipe(pluck("message"));
  }
}
