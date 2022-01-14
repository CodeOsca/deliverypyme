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

export const HeaderRetirement: Column[] = [
  { header: "Título*   Requerido", key: "storeName", width: 25, style },
  { header: "Dirección completa*   Requerido", key: "address", width: 65, style },
  { header: "Carga", key: "productsAmount", width: 25, style },
  { header: "Hora inicial", key: "startTime", width: 20, style },
  { header: "Hora final", key: "endTime", width: 30, style },
  {
    header: "Tiempo de servicio",
    key: "serviceTime",
    width: 45,
    style,
  },
  { header: "Notas", key: "observations", width: 65, style },
  { header: "Latitud", key: "latitude", width: 25, style },
  { header: "Longitud", key: "longitude", width: 25, style },
  { header: "Id de referencia", key: "id", width: 30, style },
  { header: "Habilidades requeridas", key: "requiredSkills", width: 25, style },
  { header: "Habilidades opcionales", key: "optionalSkills", width: 25, style },
  { header: "Persona de contacto", key: "name", width: 25, style },
  { header: "Teléfono de contacto", key: "phone", width: 25, style },
  { header: "Hora inicial 2", key: "startTime2", width: 16, style },
  { header: "Hora inicial 2", key: "endTime2", width: 16, style },
  { header: "Carga 2", key: "charge2", width: 16, style },
  { header: "Carga 3", key: "charge3", width: 16, style },
  { header: "Prioridad", key: "priority", width: 16, style },
  { header: "SMS", key: "sms", width: 16, style },
  { header: "Correo electrónico de contacto", key: "email", width: 35, style },
];
