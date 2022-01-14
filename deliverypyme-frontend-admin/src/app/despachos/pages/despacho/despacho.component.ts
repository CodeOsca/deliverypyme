import { ProductsService } from "./../../shared/services/products.service";
import { CaptureComponent } from "./../../../shared/components/capture/capture.component";
import { Dispatch } from "../../shared/interfaces/dispatch.interface";
import { DispatchesService } from "../../shared/services/dispatches.service";
import { Reschedule } from "../../shared/enums/reschedule-type.enum";
import { ActivatedRoute } from "@angular/router";
import { ProductsColumns } from "../../shared/constants/products-columns.constant";
import { Product } from "../../shared/interfaces/product.interface";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";
import { DetallesComponent } from "src/app/usuario/modal/detalles/detalles.component";
import { DatePipe, Location } from "@angular/common";
import { SolicitudComponent } from "../../modal/solicitud/solicitud.component";
import { CouponCalculate } from "src/app/shared/helpers/coupon-discount.helper";
import { Status } from "../../shared/enums/status.enum";
import { EditPriceComponent } from "src/app/shared/components/edit-price/edit-price.component";

@Component({
  selector: "app-despacho",
  templateUrl: "./despacho.component.html",
  styleUrls: [
    "../../../shared/css/main.css",
    "../../../shared/css/table.css",
    "../../../shared/css/form.css",
    "./despacho.component.css",
  ],
})
export class DespachoComponent implements OnInit {
  private currentDispatch: string;
  reschedule = Reschedule;
  form: FormGroup;
  columns = ProductsColumns;
  products: Product[] = [];
  dispatch: Dispatch;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private activedRoute: ActivatedRoute,
    private dispatchesService: DispatchesService,
    private location: Location,
    private productsService: ProductsService
  ) {
    this.form = this.fb.group({
      type: ["", [Validators.required]],
      date: ["", [Validators.required]],
    });
  }

  get isPaid() {
    return this.dispatch.status === Status.PAID;
  }

  get discount() {
    return new CouponCalculate(this.dispatch.amount, this.dispatch.coupon!.discountRate).calculate();
  }

  goBack() {
    this.location.back();
  }

  showCapture() {
    this.dialog.open(CaptureComponent, { data: this.dispatch.capture });
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(({ _id }) => {
      this.currentDispatch = _id;
      this.getDispatch();
    });
  }

  getDispatch() {
    this.dispatchesService.getOne(this.currentDispatch).subscribe((dispatch) => {
      this.dispatch = dispatch;
      this.products = this.dispatch.products;
      this.products.forEach((product) => {
        product.calendar = false;
      });
    }, this.error);
  }

  clickVerDetalles(product: Product) {
    this.dialog.open(SolicitudComponent, {
      data: product,
    });
  }

  clickVerUsuario() {
    this.dialog.open(DetallesComponent, {
      data: this.dispatch.user,
    });
  }

  confirmarFecha(date: Date) {
    this.form.controls["date"].setValue(date);
  }

  submitDate() {
    if (this.form.invalid) {
      this.alert.setAlert({ mensaje: "Debe seleccionar (Retiro) y una fecha.", tipo: "error" });
      return;
    }
    this.rescheduleRetirementDate();
  }

  private rescheduleRetirementDate() {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: `Re-agendar retiro`,
        description: `¿Desea re-agendar el retiro de este despacho para el ${this.datePipe.transform(
          this.form.value.date,
          "EEEE - d MMMM, y"
        )}?`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { date } = this.form.value;
        this.dispatchesService.rescheduleRetirementDate(this.dispatch, date).subscribe(this.success, this.error);
      }
    });
  }

  reagendarEnvio(date: Date, product: Product) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: `Re-agendar envío`,
        description: `¿Desea re-agendar el envío del producto con ID: (${
          product._id
        }) para el día ${this.datePipe.transform(date, "EEEE - d MMMM, y")}?`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productsService.reschedule(product, date).subscribe(this.success, this.error);
        product.calendar = false;
      }
    });
  }

  editAmount() {
    this.dialog
      .open(EditPriceComponent, { data: this.dispatch.amount })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.dispatchesService.editAmount(this.dispatch, result).subscribe(this.success, this.error);
        }
      });
  }

  editPrice(product: Product) {
    this.dialog
      .open(EditPriceComponent, { data: product.price })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.productsService.editPrice(product, result).subscribe(this.success, this.error);
        }
      });
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.form.reset();
    this.getDispatch();
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
