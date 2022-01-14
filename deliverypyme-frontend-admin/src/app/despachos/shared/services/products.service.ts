import { pluck } from "rxjs/operators";
import { Observable } from "rxjs";
import { Product } from "./../interfaces/product.interface";
import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private API = environment.API + "products/";
  constructor(private http: HttpClient) {}
  editPrice(product: Product, price: number): Observable<string> {
    return this.http.put(this.API + "price", { _id: product._id, price }).pipe(pluck("message"));
  }

  reschedule(product: Product, deliveryDate: Date | string): Observable<string> {
    return this.http.post<string>(this.API + "reschedule", { _id: product._id, deliveryDate }).pipe(pluck("message"));
  }
}
