import { Columns } from "src/app/shared/interfaces/columns.interface";

export const DispatchsColumns: Columns = {
  columns: [
    ["Fecha agendada", "retirementDate"],
    ["Monto", "amount"],
    ["Estado", "status"],
  ],
  columnsSelect: ["retirementDate", "amount", "status", "opciones"],
  displayedColumns: ["retirementDate", "amount", "status", "opciones"],
  480: ["retirementDate", "opciones"],
  680: ["retirementDate", "amount", "status", "opciones"],
  768: ["retirementDate", "amount", "status", "opciones"],
  1024: ["retirementDate", "amount", "status", "opciones"],
};
