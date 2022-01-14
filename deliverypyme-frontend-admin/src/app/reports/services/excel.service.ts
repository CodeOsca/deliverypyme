import { WorksheetModel } from "./../models/woorkheet.model";
import { DateCustom } from "./../../shared/services/custom-date.service";
// @ts-ignore
import { Workbook } from "exceljs";
import { saveAs } from "file-saver";
import { Dispatch } from "src/app/despachos/shared/interfaces/dispatch.interface";

export abstract class ExcelService {
  private type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  private workbook = new Workbook();

  constructor(protected name: string) {}

  private build(sheet: WorksheetModel<Partial<Dispatch[]>>) {
    const worksheet = this.workbook.addWorksheet(sheet.name);
    worksheet.columns = sheet.header;
    sheet.data.forEach((dispatch) => worksheet.addRow(dispatch));
  }

  private resetBook() {
    this.workbook = new Workbook();
  }

  generateOnePage(sheet: WorksheetModel<Partial<Dispatch[]>>) {
    this.build(sheet);
    this.save();
    this.resetBook();
  }

  generateManyPage(sheets: WorksheetModel<Partial<Dispatch[]>>[]) {
    sheets.forEach((sheet) => this.build(sheet));
    this.save();
    this.resetBook();
  }

  private async save() {
    const data = await this.workbook.xlsx.writeBuffer();
    const blob = new Blob([data], { type: this.type });
    saveAs(blob, this.name + "-" + DateCustom.shortDate(new Date()) + ".xlsx");
  }
}
