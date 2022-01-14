import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AddFotosComponent } from "../../components/add-fotos/add-fotos.component";

@Component({
  selector: "app-fotos",
  templateUrl: "./fotos.component.html",
  styleUrls: ["./fotos.component.css", "../../../shared/css/main.css"],
})
export class FotosComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      type: ["1"],
    });
  }

  openAddDialog() {
    this.dialog
      .open(AddFotosComponent)
  }
}
