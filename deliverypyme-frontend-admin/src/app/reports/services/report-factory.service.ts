import { Report } from "./../interfaces/report.interface";
import { ExcelDeliveryService } from "./excel-delivery.service";
import { ReportTypes } from "./../enums/report-types";
import { Injectable } from "@angular/core";
import { ExcelRetirementService } from "./excel-retirement.service";

@Injectable({
  providedIn: "root",
})
export class ReportFactoryService {
  private types: Map<ReportTypes, Report> = new Map();

  constructor(
    private excelDeliveryService: ExcelDeliveryService,
    private excelRetirementService: ExcelRetirementService
  ) {
    this.types.set(ReportTypes.RETIREMENT, excelRetirementService);
    this.types.set(ReportTypes.DELIVER, excelDeliveryService);
  }

  get(type: ReportTypes) {
    return this.types.get(type);
  }
}
