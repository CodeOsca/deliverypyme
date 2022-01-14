import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  width: boolean;

  nav: any[] = [
    { link: "dashboard", nombre: "Panel", icon: "tachometer-alt", exact: true, is1024: true },
    { link: "perfil", nombre: "Mis Datos", icon: "cogs", exact: true, is1024: true },
    { link: "pagos-realizados", nombre: "Pagos realizados", icon: "truck", exact: false, is1024: true },
    { link: "usuarios", nombre: "Usuarios", icon: "users", exact: true, is1024: true },
    { link: "usuarios/solicitudes", nombre: "Solicitudes", icon: "id-card", exact: true, is1024: false },
    { link: "comunas", nombre: "Comunas", icon: "building", exact: true, is1024: true },
    { link: "resumen", nombre: "Pagos pendientes", icon: "money-check-alt", exact: false, is1024: true },
    { link: "pymes-landing", nombre: "Pymes landing", icon: "comments", exact: false, is1024: false },
    { link: "cupones", nombre: "Cupones", icon: "qrcode", exact: true, is1024: false },
    { link: "transferencias", nombre: "Transferencias", icon: "eye", exact: true, is1024: false },
  ];

  @Input() verNav: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  constructor(public breakObsrv: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakObsrv
      .observe(["(min-width: 768px)", "(orientation: portrait)", "(orientation: landscape)"])
      .subscribe((lay) => {
        this.width = lay.breakpoints["(min-width: 768px)"];
      });
  }

  closeNav() {
    if (!this.width) this.close.emit(false);
  }
}
