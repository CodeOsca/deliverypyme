import { Order } from "./../interfaces/order.interface";
import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  private API = environment.API + "orders/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Order[]>(this.API);
  }

  getOne(_id: string) {
    return this.http.get<Order>(this.API + _id);
  }

  amountPaid() {
    return this.http.get<number>(this.API + "amount-paid");
  }

  getAllByDate(start: Date, end: Date) {
    return this.http.get<Order[]>(this.API + "date", { params: { start: String(start), end: String(end) } });
  }
}
