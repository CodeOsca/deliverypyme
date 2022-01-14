import { Columns } from "../../../shared/interfaces/columns.interface";
export const SubscriptionColumns: Columns = {
  columns: [
    ["usuario", "user"],
    ["cantidad de despachos", "dispatches"],
    ["fecha a pagar", "dateToPayment"],
    ["monto", "amount"],
    ["", "opciones"],
  ],
  columnsSelect: ["user", "dispatches", "dateToPayment", "amount", "opciones"],
  displayedColumns: ["user", "dispatches", "dateToPayment", "amount", "opciones"],
  480: ["user", "opciones"],
  680: ["user", "dispatches", "dateToPayment", "opciones"],
  768: ["user", "dispatches", "dateToPayment", "amount", "opciones"],
  1024: ["user", "dispatches", "dateToPayment", "amount", "opciones"],
};
