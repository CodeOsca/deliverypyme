import { Product } from "../../shared/interfaces/product.interface";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-solicitud",
  templateUrl: "./solicitud.component.html",
  styleUrls: ["./solicitud.component.css", "../../../shared/css/modal.css"],
})
export class SolicitudComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SolicitudComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
