import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  private alert = new Subject<any>();
  getAlert = this.alert.asObservable();

  setAlert(data: any) {
    this.alert.next(data);
  }

  constructor() {}
}
