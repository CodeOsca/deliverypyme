import { Columns } from "../../../shared/interfaces/columns.interface";
export const UsersColumns: Columns = {
  columns: [
    ["nombre", "name"],
    ["nombre del pyme", "storeName"],
    ["correo", "email"],
    ["telefono", "phone"],
    ["", "opciones"],
  ],
  columnsSelect: ["name", "storeName", "email", "phone", "opciones"],
  displayedColumns: ["name", "storeName", "email", "phone", "opciones"],
  480: ["name", "opciones"],
  680: ["name", "storeName", "email", "opciones"],
  768: ["name", "storeName", "email", "opciones"],
  1024: ["name", "storeName", "email", "phone", "opciones"],
};

export const UsersWithColumns: Columns = {
  columns: [
    ["", "select"],
    ["nombre", "name"],
    ["nombre del pyme", "storeName"],
    ["correo", "email"],
    ["teléfono", "phone"],
    ["estado", "status"],
    ["", "opciones"],
  ],
  columnsSelect: ["select", "name", "storeName", "email", "phone", "status", "opciones"],
  displayedColumns: ["select", "name", "storeName", "email", "phone", "status", "opciones"],
  480: ["select", "name", "opciones"],
  680: ["select", "name", "storeName", "email", "opciones"],
  768: ["select", "name", "storeName", "email", "opciones"],
  1024: ["select", "name", "storeName", "email", "phone", "status", "opciones"],
};
