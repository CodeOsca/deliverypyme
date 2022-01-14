import { Columns } from "./../../../shared/interfaces/columns.interface";
export const OrderColumn: Columns = {
  columns: [
    ["Pyme", "pyme"],
    ["Método", "media"],
    ["Tipo", "typeReference"],
    ["Total pagado", "amount"],
    ["Fecha del pago", "paymentDate"],
  ],
  columnsSelect: ["pyme", "media", "typeReference", "amount", "paymentDate", "opciones"],
  displayedColumns: ["pyme", "media", "typeReference", "amount", "paymentDate", "opciones"],
  480: ["pyme", "amount"],
  680: ["pyme", "media", "amount", "opciones"],
  768: ["pyme", "media", "typeReference", "amount", "paymentDate", "opciones"],
  1024: ["pyme", "media", "typeReference", "amount", "paymentDate", "opciones"],
};
