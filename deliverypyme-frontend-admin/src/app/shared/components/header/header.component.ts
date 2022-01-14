import { Component, OnInit, HostListener, Input, Output, EventEmitter } from "@angular/core";
import { ReportTypes } from "src/app/reports/enums/report-types";
import { ReportFactoryService } from "src/app/reports/services/report-factory.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  verNav: boolean = false;
  headerColor: boolean = false;

  nav1024: any[] = [
    { link: "transferencias", nombre: "Transferencias", icon: "eye", exact: true },
    { link: "usuarios/solicitudes", nombre: "Solicitudes", icon: "id-card", exact: true },
    { link: "pymes-landing", nombre: "Pymes landing", icon: "comments", exact: false },
    { link: "cupones", nombre: "Cupones", icon: "qrcode", exact: true },
  ];

  @Input() nav: boolean = false;
  @Input() notificaciones: boolean = false;
  @Input() notificationsNotSeen: number = 0;
  @Input() configuraciones: boolean = false;
  @Output() clickVerNav = new EventEmitter<boolean>();
  @Output() verNotificaciones = new EventEmitter<boolean>();
  @Output() verConfiguraciones = new EventEmitter<boolean>();

  @HostListener("window:scroll", ["$event"])
  doSomethingOnWindowsScroll($event: any) {
    this.headerColor = $event.srcElement.children[0].scrollTop > 10;
  }

  constructor(private reportFactory: ReportFactoryService) {}

  ngOnInit(): void {}

  clickNav(valor: boolean) {
    this.nav = valor;
    this.clickVerNav.emit(valor);
    localStorage.setItem("nav", `${valor}`);
  }

  verMisNotificaciones() {
    this.verNotificaciones.emit(!this.notificaciones);
  }

  verMiConfiguracion() {
    this.verConfiguraciones.emit(!this.configuraciones);
  }

  generateReportRetirement() {
    this.reportFactory.get(ReportTypes.RETIREMENT)?.generate();
  }
}
