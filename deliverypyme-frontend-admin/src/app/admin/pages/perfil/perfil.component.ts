import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/shared/services/auth.service";
import { AlertService } from "src/app/shared/services/alert.service";
import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { UsersService } from "src/app/usuario/shared/services/users.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.css", "../../../shared/css/main.css"],
})
export class PerfilComponent implements OnInit {
  verSeleccionarImagen: boolean = false;
  verEditarPerfil: boolean = false;
  user: any;
  API = environment.API;
  constructor(
    private alertService: AlertService,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentProfile.subscribe((user) => {
      this.user = user;
    });
  }

  updateUser(user: User) {
    this.usersService.update(user).subscribe(this.success, this.error);
  }

  guardarImagenPerfil(image: File) {
    if (image) {
      this.usersService.uploadImage(image).subscribe(this.success, this.error);
      this.verSeleccionarImagen = false;
    }
  }

  private success = (message: string) => {
    this.alertService.setAlert({ mensaje: message, tipo: "update" });
    this.authService.updateProfile();
  };
  private error = (message: string) => {
    this.alertService.setAlert({ mensaje: message, tipo: "error" });
  };
}
