import { ChangeDiscountRateComponent } from "./../../modal/change-discount-rate/change-discount-rate.component";
import { Expiration } from "../../shared/enums/expiration-filter.enum";
import { Status } from "../../shared/enums/status-filter.enum";
import { filterOptions } from "./../../shared/constants/coupon-filter.constant";
import { CouponsService } from "./../../shared/services/coupons.service";
import { Coupon } from "./../../shared/interfaces/coupon.interface";
import { CouponColumns } from "./../../shared/constants/coupon-columns.contant";
import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";
import { AddCuponComponent } from "../../modal/add-cupon/add-cupon.component";
import { RenovateCuponComponent } from "../../modal/renovate-cupon/renovate-cupon.component";

@Component({
  selector: "app-cupones",
  templateUrl: "./cupones.component.html",
  styleUrls: [
    "../../../shared/css/main.css",
    "../../../shared/css/table.css",
    "./cupones.component.css",
  ],
})
export class CuponesComponent implements OnInit {
  statusFilter = Status;
  columns = CouponColumns;
  coupons: Coupon[] = [];
  selection: Coupon[] = [];
  filterOptions = filterOptions;

  constructor(private alert: AlertService, private dialog: MatDialog, private couponsService: CouponsService) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons() {
    this.couponsService.getAll().subscribe((coupons) => {
      this.coupons = this.parsear(coupons);
    });
  }

  clickDeshabilitarMasivoCupones() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un cupón para deshabilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Deshabilitar cupones",
        description: `¿Desea deshabilitar los cupones seleccionados? (${this.selection.length} cupones marcados)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.couponsService.toDisabled(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickHabilitarMasivoCupones() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un cupón para habilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Habilitar cupones",
        description: `¿Desea habilitar los cupones seleccionados? (${this.selection.length} cupones marcados)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.couponsService.toEnable(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickEliminarMasivosCupones() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un cupón para eliminar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Eliminar cupones",
        description: `¿Desea eliminar los cupones seleccionados? (${this.selection.length} cupones marcados)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.remove(this.selection);
      }
    });
  }

  clickEliminarCupon(coupon: Coupon) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: { title: "Eliminar cupon", description: `¿Desea eliminar el cupón ${coupon.name}?` },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.remove([coupon]);
      }
    });
  }

  clickAddCupon() {
    const dialogRef = this.dialog.open(AddCuponComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCoupons();
      }
    });
  }

  renovate(coupon: Coupon) {
    const dialogRef = this.dialog.open(RenovateCuponComponent, {
      data: coupon,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCoupons();
      }
    });
  }

  changeDiscountRate(coupon: Coupon) {
    const dialogRef = this.dialog.open(ChangeDiscountRateComponent, {
      data: coupon,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCoupons();
      }
    });
  }

  private remove(coupons: Coupon[]) {
    this.couponsService.delete(coupons).subscribe(this.success, this.error);
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.getCoupons();
    this.selection = [];
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };

  private parsear(coupons: Coupon[]) {
    return coupons
      .map((coupon) => {
        coupon.status = coupon.status ? Status.ENABLE : Status.DISABLE;
        return coupon;
      })
      .filter((coupon) => {
        coupon.isValid = coupon.isValid ? Expiration.VALID : Expiration.INVALID;
        return coupon;
      });
  }
}
