// @ts-ignore
import { Column, Font, Style } from "exceljs/dist/exceljs.min.js";

const font: Partial<Font> = {
  bold: true,
  size: 12,
  italic: true,
};

const style: Partial<Style> = {
  alignment: { horizontal: "center", vertical: "middle" },
  font,
};

export const HeaderDelivery: Column[] = [
  { header: "Titular a entregar", key: "deliveryName", width: 25, style },
  { header: "Teléfono", key: "deliveryPhone", width: 25, style },
  { header: "Dirección", key: "address", width: 65, style },
  { header: "Dirección detalles", key: "addressDetails", width: 65, style },
  { header: "Hora inicial", key: "startTime", width: 20, style },
  { header: "Hora final", key: "endTime", width: 30, style },
  {
    header: "Tiempo de servicio",
    key: "serviceTime",
    width: 45,
    style,
  },
  { header: "Notas", key: "observations", width: 25, style },
  { header: "Latitud", key: "latitude", width: 25, style },
  { header: "Longitud", key: "longitude", width: 25, style },
  { header: "ID de referencia", key: "id", width: 30, style },
];
