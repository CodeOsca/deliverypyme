import { AlertService } from "./../../../shared/services/alert.service";
import { filterDate } from "../../shared/enums/filter-date.enum";
import { OrdersService } from "./../../shared/services/orders.service";
import { filterOptions } from "./../../shared/constants/order-filter.constant";
import { OrderColumn } from "./../../shared/constants/orders-columns.constant";
import { Component, OnInit } from "@angular/core";
import { Order } from "../../shared/interfaces/order.interface";
import { MatButtonToggleChange } from "@angular/material/button-toggle";
import { TypeReference } from "../../shared/enums/type-reference.enum";
import { OrderFilterDateFactory } from "../../shared/models/order-filter-date.model";

@Component({
  selector: "app-ordenes",
  templateUrl: "./ordenes.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./ordenes.component.css"],
})
export class OrdenesComponent implements OnInit {
  amountTotal = 0;
  filterDates = Object.values(filterDate);
  columns = OrderColumn;
  orders: Order[] = [];
  filterOptions = filterOptions;

  constructor(private ordersService: OrdersService, private alert: AlertService) {}

  ngOnInit(): void {
    this.filterByDate({ value: filterDate.TODAY });
  }

  getAll() {
    this.ordersService.getAll().subscribe(this.success, this.error);
  }

  filterByDate({ value }: Partial<MatButtonToggleChange>) {
    if (value === filterDate.ALL) {
      this.getAll();
      return;
    }
    const range = new OrderFilterDateFactory().get(value);
    this.ordersService.getAllByDate(range?.start!, range?.end!).subscribe(this.success, this.error);
  }

  link(order: Order) {
    let link = "";
    if (TypeReference.DISPATCH === order.typeReference) {
      link = "/despacho/" + order.reference;
    } else if (TypeReference.SUBSCRIPTION === order.typeReference) {
      link = "/resumen/" + order.reference;
    }
    return link;
  }
  private updateAmountTotal() {
    this.amountTotal = this.orders.reduce((acc, order) => acc + order.amount, 0);
  }

  private success = (orders: Order[]) => {
    this.orders = orders;
    this.updateAmountTotal();
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
