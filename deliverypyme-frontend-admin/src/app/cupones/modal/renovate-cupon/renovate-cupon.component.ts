import { CouponsService } from "./../../shared/services/coupons.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Coupon } from "../../shared/interfaces/coupon.interface";
import { AlertService } from "src/app/shared/services/alert.service";

@Component({
  selector: "app-edit-cupon",
  templateUrl: "./renovate-cupon.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./renovate-cupon.component.css"],
})
export class RenovateCuponComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    public dialogRef: MatDialogRef<RenovateCuponComponent>,
    @Inject(MAT_DIALOG_DATA) public coupon: Coupon,
    private couponsService: CouponsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      typeTime: ["d", [Validators.required]],
      expirationTime: ["", [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  time() {
    if (this.form.value.typeTime === "d") return "días";
    if (this.form.value.typeTime === "h") return "horas";
    return "minutos";
  }

  submitCoupon() {
    if (this.form.valid) {
      let { expirationTime, typeTime } = this.form.value;
      expirationTime = `${expirationTime}${typeTime}`;
      this.couponsService.renovate({ _id: this.coupon._id, expirationTime }).subscribe(this.success, this.error);
      this.dialogRef.close(true);
    }
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };

  verificarInput(value: string) {
    return this.form.get(value)?.invalid && (this.form.get(value)?.dirty || this.form.get(value)?.touched);
  }
}
