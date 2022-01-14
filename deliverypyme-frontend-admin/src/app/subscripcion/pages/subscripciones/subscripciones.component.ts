import { Status } from "./../../shared/enums/status.enum";

import { SubscriptionColumns } from "./../../shared/constants/subscription-columns.constant";
import { filterOptions } from "./../../shared/constants/subscription-filter.constant";
import { SubscriptionsService } from "./../../shared/services/subscriptions.service";
import { Subscription } from "./../../shared/interfaces/subscription.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subscripciones",
  templateUrl: "./subscripciones.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./subscripciones.component.css"],
})
export class SubscripcionesComponent implements OnInit {
  status = Status;
  columns = SubscriptionColumns;
  subscripciones: Subscription[];
  filterOptions = filterOptions;

  constructor(private subscriptionsService: SubscriptionsService) {}

  ngOnInit(): void {
    this.subscriptionsService.getAllNotPayed().subscribe((subscriptions) => {
      console.log(subscriptions);
      this.subscripciones = subscriptions;
    });
  }
}
