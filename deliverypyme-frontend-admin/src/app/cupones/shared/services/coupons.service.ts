import { environment } from "./../../../../environments/environment";
import { Coupon } from "./../interfaces/coupon.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { User } from "src/app/usuario/shared/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class CouponsService {
  private API = environment.API + "coupons/";
  private httpOptions: any = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Coupon[]>(this.API);
  }
  create(coupon: Coupon) {
    return this.http.post<Coupon>(this.API, coupon);
  }

  renovate(coupon: Partial<Coupon>): Observable<string> {
    return this.http.put(this.API + "renovate", coupon).pipe(pluck("message"));
  }

  increseDiscountRate(coupon: Partial<Coupon>): Observable<string> {
    return this.http.put(this.API + "change-discount-rate", coupon).pipe(pluck("message"));
  }

  toDisabled(coupons: Coupon[]): Observable<string> {
    return this.changeStatus(coupons, false).pipe(pluck("message"));
  }

  toEnable(coupons: Coupon[]): Observable<string> {
    return this.changeStatus(coupons, true).pipe(pluck("message"));
  }

  private changeStatus(coupons: Coupon[], status: boolean) {
    const _ids = coupons.map((coupon) => coupon._id);
    return this.http.put(this.API + "change-status", { status, _ids });
  }

  delete(coupons: Coupon[]): Observable<string> {
    const _ids = coupons.map((coupon) => coupon._id);
    this.httpOptions["body"] = { _ids };
    return this.http.delete(this.API, this.httpOptions).pipe(pluck("message"));
  }

  sendToUsers(coupon: Coupon, users: User[]): Observable<string> {
    const _ids = users.map((user) => user._id);
    return this.http.post(this.API + "send-to-users", { users: _ids, _id: coupon._id }).pipe(pluck("message"));
  }
}
