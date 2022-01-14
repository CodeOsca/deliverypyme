import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { CouponsService } from "./../../../cupones/shared/services/coupons.service";
import { Coupon } from "./../../../cupones/shared/interfaces/coupon.interface";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";

@Component({
  selector: "app-enviar-cupon",
  templateUrl: "./enviar-cupon.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./enviar-cupon.component.css"],
})
export class EnviarCuponComponent implements OnInit {
  form: FormGroup;
  coupons: Coupon[] = [];
  couponsFilter: Coupon[] = [];
  verCoupons: boolean = false;
  couponSeleccionado: Coupon;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EnviarCuponComponent>,
    private alert: AlertService,
    private couponsService: CouponsService,
    @Inject(MAT_DIALOG_DATA) public data: { users: User[] }
  ) {}

  ngOnInit(): void {
    this.couponsService.getAll().subscribe((coupons) => {
      this.coupons = coupons;
      this.couponsFilter = coupons;
    });
    this.form = this.fb.group({
      coupon: ["", [Validators.required]],
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  clickSeleccionarFilter(select: Coupon) {
    this.couponSeleccionado = select;
    this.form.controls["coupon"].setValue(`${select.name}-${select.discountRate}%`);
    this.verCoupons = false;
  }

  blurSeleccionarFilter() {
    this.verCoupons = false;
    const coupons = this.verificateSelect();
    if (coupons.length === 1) {
      this.couponSeleccionado = coupons[0];
      this.form.controls["coupon"].setValue(`${coupons[0].name}-${coupons[0].discountRate}%`);
    }
  }

  filterSelect(event: Event) {
    this.verCoupons = true;
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.couponsFilter = this.coupons.filter(
      (coupon) => coupon.name.toLowerCase().includes(filterValue) || String(coupon.discountRate).includes(filterValue)
    );
  }

  clickEnviarCupon() {
    const filterValue = this.coupons.map((coupon) => `${coupon.name}-${coupon.discountRate}%`);
    const coupons = filterValue.filter((value) => value.toLowerCase() === this.form.value.coupon.trim().toLowerCase());
    if (coupons.length === 0 || coupons.length > 1) {
      this.alert.setAlert({ mensaje: "Selecione una opción valida.", tipo: "error" });
      return;
    }
    this.couponsService.sendToUsers(this.couponSeleccionado, this.data.users).subscribe(this.success, this.error);
    this.dialogRef.close(true);
  }

  verificateSelect() {
    const filterValue = this.form.value.coupon.trim().toLowerCase();
    const coupons = this.coupons.filter(
      (coupon) => coupon.name.toLowerCase().includes(filterValue) || String(coupon.discountRate).includes(filterValue)
    );
    return coupons;
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
  };
  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
