import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AlertService } from "src/app/shared/services/alert.service";
import { Coupon } from "../../shared/interfaces/coupon.interface";
import { CouponsService } from "../../shared/services/coupons.service";

@Component({
  selector: "app-change-discount-rate",
  templateUrl: "./change-discount-rate.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./change-discount-rate.component.css"],
})
export class ChangeDiscountRateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    public dialogRef: MatDialogRef<ChangeDiscountRateComponent>,
    @Inject(MAT_DIALOG_DATA) public coupon: Coupon,
    private couponsService: CouponsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      discountRate: [this.coupon.discountRate | 0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submitCoupon() {
    if (this.form.valid) {
      let { discountRate } = this.form.value;
      this.couponsService
        .increseDiscountRate({ _id: this.coupon._id, discountRate })
        .subscribe(this.success, this.error);
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
