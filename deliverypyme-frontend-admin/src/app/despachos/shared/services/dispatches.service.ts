import { Dispatch } from "../interfaces/dispatch.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DispatchesService {
  private API = environment.API + "dispatches/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Dispatch[]>(this.API);
  }
  getOne(_id: string) {
    return this.http.get<Dispatch>(this.API + _id);
  }
  getAllActive() {
    return this.http.get<Dispatch[]>(this.API + "all-active");
  }

  getAllPendingToWithdraw() {
    return this.http.get<Dispatch[]>(this.API + "pending-to-withdraw");
  }

  getAllInRevision() {
    return this.http.get<Dispatch[]>(this.API + "revision");
  }

  getAllPendingToDeliver() {
    return this.http.get<Dispatch[]>(this.API + "pending-to-deliver");
  }

  rescheduleRetirementDate(dispatch: Dispatch, retirementDate: Date): Observable<string> {
    return this.http.put(this.API + "retirement-date", { _id: dispatch._id, retirementDate }).pipe(pluck("message"));
  }

  acceptedPaid(dispatch: Partial<Dispatch>): Observable<string> {
    return this.http.post(this.API + "accepted-paid", { _id: dispatch._id }).pipe(pluck("message"));
  }

  rejectedPaid(dispatch: Partial<Dispatch>): Observable<string> {
    return this.http.post(this.API + "rejected-paid", { _id: dispatch._id }).pipe(pluck("message"));
  }
  editAmount(dispatch: Dispatch, amount: number): Observable<string> {
    return this.http.put(this.API + "amount", { _id: dispatch._id, amount }).pipe(pluck("message"));
  }
}
