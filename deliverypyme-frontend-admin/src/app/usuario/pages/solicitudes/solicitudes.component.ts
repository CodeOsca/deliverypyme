import { AuthService } from "src/app/auth/shared/services/auth.service";
import { UsersService } from "src/app/usuario/shared/services/users.service";
import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";
import { User } from "../../shared/interfaces/user.interface";
import { UsersColumns } from "../../shared/constants/users-columns.constant";

@Component({
  selector: "app-solicitudes",
  templateUrl: "./solicitudes.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./solicitudes.component.css"],
})
export class SolicitudesComponent implements OnInit {
  columns = UsersColumns;
  selection: Partial<User>[] = [];
  users: User[] = [];

  constructor(
    private alert: AlertService,
    private dialog: MatDialog,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getRequests().subscribe((users) => {
      this.users = users;
    }, this.error);
  }

  accepted(user: User) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Solicitud de registro",
        description: `¿Desea aprobar la solicitud de registro del usuario "${user.name}"?`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.requestAccount(user, true).subscribe(this.success, this.error);
      }
    });
  }

  rejected(user: User) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Solicitud de registro",
        description: `¿Desea rechazar la solicitud de registro del usuario "${user.name}"?`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.requestAccount(user, false).subscribe(this.success, this.error);
      }
    });
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.getUsers();
  };
  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
