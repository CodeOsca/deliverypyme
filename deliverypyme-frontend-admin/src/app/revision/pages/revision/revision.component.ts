import { ConfirmarComponent } from "./../../../shared/modal/confirmar/confirmar.component";
import { AlertService } from "./../../../shared/services/alert.service";
import { Revision } from "./../../shared/interfaces/revision.interface";
import { TypeReference } from "./../../../ordenes/shared/enums/type-reference.enum";
import { Subscription } from "./../../../subscripcion/shared/interfaces/subscription.interface";
import { SubscriptionsService } from "./../../../subscripcion/shared/services/subscriptions.service";
import { DispatchesService } from "src/app/despachos/shared/services/dispatches.service";
import { Component, OnInit } from "@angular/core";
import { filterDate } from "src/app/ordenes/shared/enums/filter-date.enum";
import { forkJoin } from "rxjs";
import { RevisionColumn } from "../../shared/constants/revision-column.constant";
import { Dispatch } from "src/app/despachos/shared/interfaces/dispatch.interface";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-revision",
  templateUrl: "./revision.component.html",
  styleUrls: ["../../../shared/css/main.css", "../../../shared/css/table.css", "./revision.component.css"],
})
export class RevisionComponent implements OnInit {
  filter = filterDate;
  columns = RevisionColumn;
  revisions: Revision[] = [];
  filterOptions = Object.values(TypeReference);

  constructor(
    private dispatchesServices: DispatchesService,
    private subscriptionsService: SubscriptionsService,
    private alert: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getRevisions();
  }

  getRevisions() {
    forkJoin([this.dispatchesServices.getAllInRevision(), this.subscriptionsService.getAllInRevision()]).subscribe(
      ([dispatches, subscriptions]) => {
        this.revisions = [];
        this.revisions.push(...dispatches.map(this.addDataToDispatch));
        this.revisions.push(...subscriptions.map(this.addDataToSubscription));
      }
    );
  }

  private addDataToDispatch(_dispatch: Dispatch) {
    const dispatch: any = { ..._dispatch };
    dispatch.link = "/despacho/" + dispatch._id;
    dispatch.typeReference = TypeReference.DISPATCH;
    return dispatch;
  }

  private addDataToSubscription(_subscription: Subscription) {
    const subscription: any = { ..._subscription };
    subscription.link = "/subscripciones/" + subscription._id;
    subscription.typeReference = TypeReference.SUBSCRIPTION;
    return subscription;
  }

  showAcceptedDialog(revision: Revision) {
    const dialog = this.dialog.open(ConfirmarComponent, { data: { title: "Aprobación de transferencia" } });
    dialog.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.accepted(revision);
      }
    });
  }

  showRejectedDialog(revision: Revision) {
    const dialog = this.dialog.open(ConfirmarComponent, { data: { title: "Rechazo de transferencia" } });
    dialog.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.rejected(revision);
      }
    });
  }

  private accepted(revision: Revision) {
    revision.typeReference === TypeReference.DISPATCH
      ? this.dispatchesServices.acceptedPaid(revision).subscribe(this.success, this.error)
      : this.subscriptionsService.acceptedPaid(revision).subscribe(this.success, this.error);
  }

  private rejected(revision: Revision) {
    revision.typeReference === TypeReference.DISPATCH
      ? this.dispatchesServices.rejectedPaid(revision).subscribe(this.success, this.error)
      : this.subscriptionsService.rejectedPaid(revision).subscribe(this.success, this.error);
  }

  private success = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "success" });
    this.getRevisions();
  };

  private error = (message: string) => {
    this.alert.setAlert({ mensaje: message, tipo: "error" });
  };
}
