import { Columns } from "./../../../shared/interfaces/columns.interface";
export const CouponColumns: Columns = {
  columns: [
    ["", "select"],
    ["nombre", "name"],
    ["código", "code"],
    ["descuento", "discountRate"],
    ["expiración", "isValid"],
    ["estado", "status"],
    ["", "opciones"],
  ],
  columnsSelect: ["select", "name", "code", "discountRate", "isValid", "status", "opciones"],
  displayedColumns: ["select", "name", "code", "discountRate", "isValid", "status", "opciones"],
  480: ["select", "name", "opciones"],
  680: ["select", "name", "code", "discountRate", "opciones"],
  768: ["select", "name", "code", "discountRate", "isValid", "opciones"],
  1024: ["select", "name", "code", "discountRate", "isValid", "status", "opciones"],
};
