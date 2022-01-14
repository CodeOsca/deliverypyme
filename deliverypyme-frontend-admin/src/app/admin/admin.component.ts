import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  verNav: boolean = localStorage.getItem("nav") === "true" ? true : false;
  verNotificaciones: boolean = false;
  verConfiguraciones: boolean = false;
  notificationsNotSeen: number = 0;
  constructor() {}

  ngOnInit() {}
}
