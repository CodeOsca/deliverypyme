import { Columns } from "../../../shared/interfaces/columns.interface";
export const ProductsColumns: Columns = {
  columns: [
    ["Nombre", "deliveryName"],
    ["Teléfono", "deliveryPhone"],
    ["Comuna", "deliveryCommuna"],
    ["Dirección", "deliveryAddress"],
    ["Precio", "price"],
    ["", "opciones"],
  ],
  columnsSelect: ["deliveryName", "deliveryPhone", "deliveryCommuna", "deliveryAddress", "price", "opciones"],
  displayedColumns: ["deliveryName", "deliveryPhone", "deliveryCommuna", "deliveryAddress", "price", "opciones"],
  480: ["deliveryName", "opciones"],
  680: ["deliveryName", "deliveryPhone", "deliveryCommuna", "opciones"],
  768: ["deliveryName", "deliveryPhone", "deliveryCommuna", "price", "opciones"],
  1024: ["deliveryName", "deliveryPhone", "deliveryCommuna", "deliveryAddress", "price", "opciones"],
};
