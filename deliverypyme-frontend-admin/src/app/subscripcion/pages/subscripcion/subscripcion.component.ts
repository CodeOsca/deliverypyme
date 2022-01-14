import { Status } from "./../../shared/enums/status.enum";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { DispatchsColumns } from "../../shared/constants/dispatch-columns.constant";
import { Subscription } from "../../shared/interfaces/subscription.interface";
import { SubscriptionsService } from "../../shared/services/subscriptions.service";
import { CouponCalculate } from "src/app/shared/helpers/coupon-discount.helper";
import { CaptureComponent } from "src/app/shared/components/capture/capture.component";

@Component({
  selector: "app-subscripcion",
  templateUrl: "./subscripcion.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./subscripcion.component.css"],
})
export class SubscripcionComponent implements AfterViewInit {
  subscription: Subscription;
  columns = DispatchsColumns;
  info: { name: string; cant: any; icon: string; color: string }[] = [];
  status = Status;
  constructor(
    private subscriptionsService: SubscriptionsService,
    private activedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location
  ) {}
  goBack() {
    this.location.back();
  }

  ngAfterViewInit() {
    this.activedRoute.params.subscribe(({ _id }) => {
      this.getSubscription(_id);
    });
  }

  showCapture() {
    this.dialog.open(CaptureComponent, { data: this.subscription.capture });
  }

  getSubscription(_id: string) {
    this.subscriptionsService.getOne(_id).subscribe((subscription) => {
      this.subscription = subscription;
      if (this.subscription) this.setInfo();
    });
  }

  private setInfo() {
    this.info = [
      {
        name: "Fecha de pago",
        cant: this.subscription.dateToPayment,
        icon: "calendar-day",
        color: "green",
      },
      {
        name: "Monto",
        cant: this.subscription.amount,
        icon: "dollar-sign",
        color: "blue",
      },
    ];
    if (this.subscription.coupon) {
      const more = [
        {
          name: "Cupón Aplicado",
          cant: this.subscription.coupon.code,
          icon: "qrcode",
          color: "blue",
        },
        {
          name: "Total pagado",
          cant: new CouponCalculate(this.subscription.amount, this.subscription.coupon!.discountRate).calculate(),
          icon: "dollar-sign",
          color: "blue",
        },
      ];
      this.info.push(...more);
    }
  }
}
