import { AuthService } from "./../../../auth/shared/services/auth.service";
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-configuraciones",
  templateUrl: "./configuraciones.component.html",
  styleUrls: ["./configuraciones.component.css"],
})
export class ConfiguracionesComponent implements OnInit {
  API = environment.API;
  focusComponent: boolean = true;
  user: User;
  @Input() verConfiguraciones: boolean = false;
  @Output() closeConfiguraciones = new EventEmitter<boolean>();

  @HostListener("click")
  clickInside() {
    this.focusComponent = true;
  }

  @HostListener("document:click")
  clickout() {
    if (this.focusComponent && this.verConfiguraciones) {
      this.focusComponent = false;
    } else {
      this.closeConfiguraciones.emit(false);
      this.focusComponent = true;
    }
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentProfile.subscribe((user) => {
      this.user = user;
    });
  }
  logout() {
    this.authService.logOut();
  }

  navClose() {
    this.closeConfiguraciones.emit(false);
  }
}
