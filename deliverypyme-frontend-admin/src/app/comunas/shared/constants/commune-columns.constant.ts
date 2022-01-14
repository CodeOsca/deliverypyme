import { Columns } from "../../../shared/interfaces/columns.interface";
export const CommunesColumns: Columns = {
  columns: [
    ["", "select"],
    ["nombre", "name"],
    ["precio", "price"],
    ["precio con iva", "priceWithIVA"],
    ["días de envío", "retirementDates"],
    ["estado", "status"],
    ["", "opciones"],
  ],
  columnsSelect: ["select", "name", "price", "priceWithIVA", "retirementDates", "status", "opciones"],
  displayedColumns: ["select", "name", "price", "priceWithIVA", "retirementDates", "status", "opciones"],
  480: ["select", "name", "opciones"],
  680: ["select", "name", "price", "priceWithIVA", "opciones"],
  768: ["select", "name", "price", "priceWithIVA", "retirementDates", "opciones"],
  1024: ["select", "name", "price", "priceWithIVA", "retirementDates", "status", "opciones"],
};
