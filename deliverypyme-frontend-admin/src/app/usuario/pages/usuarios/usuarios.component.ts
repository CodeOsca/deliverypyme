import { PaymentType } from "./../../shared/enums/payment-type.enum";
import { CommentFilter } from "./../../shared/enums/comment-filter.enum";
import { StatusFilter } from "./../../shared/enums/status-filter.enum";
import { UsersService } from "src/app/usuario/shared/services/users.service";
import { UsersWithColumns } from "../../shared/constants/users-columns.constant";
import { Component, OnInit } from "@angular/core";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";
import { DetallesComponent } from "../../modal/detalles/detalles.component";
import { ComentarioComponent } from "../../modal/comentario/comentario.component";
import { EnviarCuponComponent } from "../../modal/enviar-cupon/enviar-cupon.component";
import { User } from "../../shared/interfaces/user.interface";
import { filterOptions } from "../../shared/constants/users-filter.contant";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./usuarios.component.css"],
})
export class UsuariosComponent implements OnInit {
  paymentType = PaymentType;
  statusFilter = StatusFilter;
  columns = UsersWithColumns;
  selection: User[] = [];
  users: User[] = [];
  filterOptions = filterOptions;

  constructor(private alert: AlertService, private dialog: MatDialog, private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAll().subscribe((users) => {
      this.users = this.parsear(users);
    }, this.error);
  }

  clickDeshabilitarMasivoUsuarios() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un usuario para deshabilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Deshabilitar usuarios",
        description: `¿Desea deshabilitar los usuarios seleccionados? (${this.selection.length} usuarios marcados)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.toDisabled(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickHabilitarMasivoUsuarios() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un usuario para habilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Habilitar usuarios",
        description: `¿Desea habilitar los usuarios seleccionados? (${this.selection.length} usuarios marcados)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.usersService.toEnable(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickEnviarCupon() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos un usuario para enviar el cupon.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(EnviarCuponComponent, { data: { users: this.selection } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.alert.setAlert({ mensaje: "Cupones enviados.", tipo: "success" });
      }
    });
  }

  clickHabilitarUsuario(title: string, description: string, message: string, user: User) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: { title, description },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.alert.setAlert({ mensaje: message, tipo: "success" });
      }
    });
  }

  clickPagoMensual(title: string, description: string, user: User, paymentType: PaymentType) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: { title, description },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let clone = { ...user };
        clone.paymentType = paymentType;
        this.usersService.changePaymentType(clone).subscribe(this.success, this.error);
      }
    });
  }

  clickVerDetalles(row: User) {
    this.dialog.open(DetallesComponent, {
      data: row,
    });
  }

  clickVerComentario(user: User) {
    const dialogRef = this.dialog.open(ComentarioComponent, {
      data: { user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }

  private parsear(users: User[]) {
    return users
      .map((user) => {
        user.status = user.status ? StatusFilter.ENABLE : StatusFilter.DISABLE;
        return user;
      })
      .map((user) => {
        let userFilter: any = { ...user };
        userFilter["commentFilter"] = user.comment?.visible ? CommentFilter.ACCEPTED : CommentFilter.REJECTED;
        return userFilter;
      });
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.getUsers();
    this.selection = [];
  };
  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
