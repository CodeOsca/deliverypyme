import { environment } from "src/environments/environment";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../../shared/interfaces/user.interface";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["../../../shared/css/modal.css", "./detalles.component.css"],
})
export class DetallesComponent implements OnInit {
  API = environment.API;
  constructor(public dialogRef: MatDialogRef<DetallesComponent>, @Inject(MAT_DIALOG_DATA) public user: User) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
