import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-edit-price",
  templateUrl: "./edit-price.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./edit-price.component.css"],
})
export class EditPriceComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public price: number
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      price: [this.price | 0, [Validators.required, Validators.min(0)]],
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.valid) {
      let { price } = this.form.value;
      this.dialogRef.close(price);
    }
  }

  verificarInput(value: string) {
    return this.form.get(value)?.invalid && (this.form.get(value)?.dirty || this.form.get(value)?.touched);
  }
}
