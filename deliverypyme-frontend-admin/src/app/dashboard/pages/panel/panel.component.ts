import { Dispatch } from "./../../../despachos/shared/interfaces/dispatch.interface";
import { OrdersService } from "./../../../ordenes/shared/services/orders.service";
import { Component, OnInit } from "@angular/core";
import { DispatchesService } from "src/app/despachos/shared/services/dispatches.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["../../../shared/css/main.css", "./panel.component.css"],
})
export class PanelComponent implements OnInit {
  infoDispatches: any[] = [
    {
      name: "Despachos registrados",
      cant: 0,
      icon: "file-alt",
      color: "green",
    },
    { name: "Total pagado", cant: 0, icon: "dollar-sign", color: "blue" },
  ];

  constructor(private dispatchesService: DispatchesService, private ordersService: OrdersService) {}

  ngOnInit(): void {
    forkJoin([this.dispatchesService.getAllActive(), this.ordersService.amountPaid()]).subscribe(
      ([dispatches, amount]) => {
        this.setDispatchesInformation(dispatches);
        this.setAmountPaid(amount);
      }
    );
  }

  private setDispatchesInformation(dispatches: Dispatch[]) {
    this.infoDispatches[0].cant = dispatches.length;
  }

  private setAmountPaid(amount: number) {
    this.infoDispatches[1].cant = amount;
  }
}
