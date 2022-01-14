import { Product } from "./../../despachos/shared/interfaces/product.interface";
import { WorksheetModel } from "./../models/woorkheet.model";
import { Report } from "./../interfaces/report.interface";
import { HeaderDelivery } from "./../constants/header-delivery.constant";
import { Injectable } from "@angular/core";
import { DispatchesService } from "src/app/despachos/shared/services/dispatches.service";
import { ExcelService } from "./excel.service";

@Injectable({
  providedIn: "root",
})
export class ExcelDeliveryService extends ExcelService implements Report {
  constructor(private dispatchesService: DispatchesService) {
    super("Plantilla de envío");
  }

  generate() {
    this.dispatchesService.getAllPendingToDeliver().subscribe((_dispatches) => {
      const sheets: WorksheetModel<any>[] = [];

      _dispatches.forEach((dispatch) => {
        sheets.push(new WorksheetModel(dispatch.user.storeName, HeaderDelivery, this.parsear(dispatch.products)));
      });

      super.generateManyPage(sheets);
    });
  }

  private parsear(products: Product[]) {
    return products.map((product) => ({
      deliveryName: product.deliveryName,
      deliveryPhone: product.deliveryPhone,
      address: product.deliveryAddress,
      addressDetails: product.addressDetails,
      id: product._id,
      startTime: "9:00",
      endTime: "19:00",
      serviceTime: "10",
      observations: product.observations,
      latitude: product.deliveryCommuna.coordinates.latitude,
      longitude: product.deliveryCommuna.coordinates.longitude,
    }));
  }
}
