import { Report } from "./../interfaces/report.interface";
import { Dispatch } from "./../../despachos/shared/interfaces/dispatch.interface";
import { DispatchesService } from "src/app/despachos/shared/services/dispatches.service";
import { HeaderRetirement } from "./../constants/header-retirement.constant";
import { Injectable } from "@angular/core";
import { ExcelService } from "./excel.service";
import { WorksheetModel } from "../models/woorkheet.model";

@Injectable({
  providedIn: "root",
})
export class ExcelRetirementService extends ExcelService implements Report {
  constructor(private dispatchesService: DispatchesService) {
    super("Plantilla de retiro");
  }

  generate() {
    this.dispatchesService.getAllPendingToWithdraw().subscribe((_dispatches) => {
      super.generateOnePage(new WorksheetModel<any>(this.name, HeaderRetirement, this.parsear(_dispatches)));
    });
  }

  private parsear(dispatches: Dispatch[]) {
    return dispatches.map((dispatch) => ({
      storeName: dispatch.user.storeName,
      address: dispatch.user.withdrawalAddress,
      productsAmount: dispatch.products.length,
      startTime: "9:00",
      endTime: "19:00",
      serviceTime: "10",
      observations: dispatch.user.withdrawalAddress,
      latitude: dispatch.user.commune?.coordinates?.latitude,
      longitude: dispatch.user.commune?.coordinates?.longitude,
      id: dispatch._id,
      requiredSkills: "",
      optionalSkills: "",
      name: dispatch.user.name,
      phone: dispatch.user.phone,
      startTime2: "",
      endTime2: "",
      charge2: "",
      charge3: "",
      priority: "",
      sms: "",
      email: dispatch.user.email,
    }));
  }
}
