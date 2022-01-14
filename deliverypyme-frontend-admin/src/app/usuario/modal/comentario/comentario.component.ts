import { CommentsService } from "./../../shared/services/comments.service";
import { AlertService } from "./../../../shared/services/alert.service";
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../../shared/interfaces/user.interface";

@Component({
  selector: "app-comentario",
  templateUrl: "./comentario.component.html",
  styleUrls: ["./comentario.component.css", "../../../shared/css/modal.css"],
})
export class ComentarioComponent {
  constructor(
    public dialogRef: MatDialogRef<ComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private alert: AlertService,
    private commentService: CommentsService
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  aprrove() {
    this.commentService.approve(this.data.user).subscribe(this.success, this.error);
    this.dialogRef.close(true);
  }

  disapprove() {
    this.commentService.disapprove(this.data.user).subscribe(this.success, this.error);
    this.dialogRef.close(true);
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
  };
  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
