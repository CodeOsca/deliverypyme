import { CouponsService } from "./../../shared/services/coupons.service";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";

@Component({
  selector: "app-add-cupon",
  templateUrl: "./add-cupon.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./add-cupon.component.css"],
})
export class AddCuponComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCuponComponent>,
    private fb: FormBuilder,
    private alert: AlertService,
    private couponsService: CouponsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      discountRate: ["", [Validators.required, Validators.pattern(/^[0-9]*$/)]],
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

  onSubmit() {
    if (this.form.valid) {
      const coupon = this.form.value;
      coupon.expirationTime = `${this.form.value.expirationTime}${this.form.value.typeTime}`;
      this.couponsService.create(coupon).subscribe(this.success, this.error);
    }
  }

  private success = () => {
    this.alert.setAlert({ mensaje: "Cupon creado.", tipo: "create" });
    this.dialogRef.close(true);
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };

  verificarInput(value: string) {
    return this.form.get(value)?.invalid && (this.form.get(value)?.dirty || this.form.get(value)?.touched);
  }
}
