import { CreateComponent } from "./../../modal/create/create.component";
import { CommunesService } from "./../../shared/services/communes.service";
import { CommunesColumns } from "../../shared/constants/commune-columns.constant";
import { Commune } from "./../../shared/interfaces/commune.interface";
import { Component, OnInit } from "@angular/core";
import { Status } from "../../shared/enums/status-filter.enum";
import { filterOptions } from "../../shared/constants/commune-filter.constant";
import { AlertService } from "src/app/shared/services/alert.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmarComponent } from "src/app/shared/modal/confirmar/confirmar.component";

@Component({
  selector: "app-comunas",
  templateUrl: "./comunas.component.html",
  styleUrls: [
    "../../../shared/css/main.css",
    "../../../shared/css/table.css",
    "./comunas.component.css",
  ],
})
export class ComunasComponent implements OnInit {
  statusFilter = Status;
  columns = CommunesColumns;
  communes: Commune[] = [];
  selection: Commune[] = [];
  filterOptions = filterOptions;

  constructor(private alert: AlertService, private dialog: MatDialog, private communesService: CommunesService) {}

  ngOnInit(): void {
    this.getCommunes();
  }

  getCommunes() {
    this.communesService.getAll().subscribe((communes) => {
      this.communes = this.parsear(communes);
    });
  }

  clickAddCommune() {
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.getCommunes();
      }
    });
  }

  clickUpdateCommune(commune: Commune) {
    const dialogRef = this.dialog.open(CreateComponent, { data: { commune } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.getCommunes();
      }
    });
  }

  clickDeshabilitarMasivoCommune() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos una comuna para deshabilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Deshabilitar comunas",
        description: `¿Desea deshabilitar los comunas seleccionados? (${this.selection.length} comunas marcadas)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.communesService.toDisabled(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickHabilitarMasivoCommune() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos una comuna para habilitar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Habilitar comunas",
        description: `¿Desea habilitar los comunas seleccionados? (${this.selection.length} comunas marcadas)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.communesService.toEnable(this.selection).subscribe(this.success, this.error);
      }
    });
  }

  clickEliminarMasivosComunas() {
    if (this.selection.length === 0) {
      this.alert.setAlert({ mensaje: "Debe seleccionar al menos una comuna para eliminar.", tipo: "error" });
      return;
    }

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: {
        title: "Eliminar comunas",
        description: `¿Desea eliminar las comunas seleccionadas? (${this.selection.length} comunas marcadas)`,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.remove(this.selection);
      }
    });
  }

  clickEliminarComuna(commune: Commune) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      data: { title: "Eliminar comuna", description: `¿Desea eliminar la communa ${commune.name}?` },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.remove([commune]);
      }
    });
  }

  private remove(coupons: Commune[]) {
    this.communesService.delete(coupons).subscribe(this.success, this.error);
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.getCommunes();
    this.selection = [];
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };

  private parsear(communes: Commune[]) {
    return communes.map((commune) => {
      commune.status = commune.status ? Status.ENABLE : Status.DISABLE;
      return commune;
    });
  }
}
