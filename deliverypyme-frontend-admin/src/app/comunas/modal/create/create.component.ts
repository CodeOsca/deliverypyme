import { AlertService } from "./../../../shared/services/alert.service";
import { CommunesService } from "./../../shared/services/communes.service";
import { Days } from "../../shared/enums/retirement-days.enum";
import { Commune } from "./../../shared/interfaces/commune.interface";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["../../../shared/css/modal.css", "../../../shared/css/form.css", "./create.component.css"],
})
export class CreateComponent implements OnInit {
  days = Object.values(Days);
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { commune: Commune },
    public dialogRef: MatDialogRef<CreateComponent>,
    private communesService: CommunesService,
    private alert: AlertService
  ) {}

  get isEdit() {
    return !!this.data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data?.commune.name, Validators.required],
      coordinates: [this.data?.commune.coordinates, Validators.required],
      price: [this.data?.commune.price, [Validators.required, Validators.min(0)]],
      retirementDates: [this.data?.commune.retirementDates, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isEdit ? this.update() : this.create();
    }
  }

  private create() {
    const commune = this.form.value;
    this.communesService.create(commune).subscribe(() => this.success("Comuna creada"), this.error);
  }

  private update() {
    const commune = this.form.value;
    commune._id = this.data?.commune._id;
    this.communesService.update(commune).subscribe(this.success, this.error);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  setCoordinates(coordinates: { latitude: number | null; longitude: number | null }) {
    if (coordinates) {
      this.form.get("coordinates")?.setValue(coordinates);
    }
  }
  verificarInput(value: string) {
    return this.form.get(value)?.invalid && (this.form.get(value)?.dirty || this.form.get(value)?.touched);
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "create" });
    this.dialogRef.close({ success: true });
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
