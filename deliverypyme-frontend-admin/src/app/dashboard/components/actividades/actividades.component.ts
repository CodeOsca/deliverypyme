import { Component, OnInit } from "@angular/core";
import { Columns } from "src/app/shared/interfaces/columns.interface";
import { NotificationsService } from "src/app/shared/services/notifications.service";

@Component({
  selector: "app-actividades",
  templateUrl: "./actividades.component.html",
  styleUrls: ["./actividades.component.css"],
})
export class ActividadesComponent implements OnInit {
  notifications: Notification[] = [];
  columns: Columns = {
    columns: [],
    columnsSelect: ["notification"],
    displayedColumns: ["notification"],
    480: ["notification"],
    680: ["notification"],
    768: ["notification"],
    1024: ["notification"],
  };

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsService.getAll().subscribe((notifications: any[]) => {
      this.notifications = notifications;
    });
  }
}
