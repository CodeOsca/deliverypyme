import { Columns } from "src/app/shared/interfaces/columns.interface";

export const RevisionColumn: Columns = {
  columns: [
    ["Nombre de la tienda", "storeName"],
    ["Nombre de contacto", "name"],
    ["Tipo", "typeReference"],
    ["Monto", "amount"],
  ],
  columnsSelect: ["storeName", "name", "typeReference", "amount", "opciones"],
  displayedColumns: ["storeName", "name", "typeReference", "amount", "opciones"],
  480: ["amount"],
  680: ["storeName", "amount", "opciones"],
  768: ["storeName", "typeReference", "amount", "opciones"],
  1024: ["storeName", "name", "typeReference", "amount", "opciones"],
};
