import { Columns } from './../../../shared/interfaces/columns.interface';
export const ProductsColumns: Columns = {
  columns: [
    ['', 'select'],
    ['nombre', 'deliveryName'],
    ['comuna', 'deliveryCommuna'],
    ['teléfono', 'deliveryPhone'],
    ['dirección', 'deliveryAddress'],
    ['observaciones', 'observations'],
    ['precio', 'price'],
  ],
  columnsSelect: [
    'select',
    'deliveryName',
    'deliveryCommuna',
    'deliveryPhone',
    'deliveryAddress',
    'observations',
    'price',
    'opciones',
  ],
  displayedColumns: [
    'select',
    'deliveryName',
    'deliveryCommuna',
    'deliveryPhone',
    'deliveryAddress',
    'observations',
    'price',
    'opciones',
  ],
  480: ['select', 'deliveryName', 'opciones'],
  680: ['select', 'deliveryName', 'deliveryCommuna', 'deliveryPhone', 'opciones'],
  768: ['select', 'deliveryName', 'deliveryCommuna', 'deliveryAddress', 'opciones'],
  1024: [
    'select',
    'deliveryName',
    'deliveryCommuna',
    'deliveryPhone',
    'deliveryAddress',
    'observations',
    'price',
    'opciones',
  ],
};

export const ProductsDetailsDispatchColumns: Columns = {
  columns: [
    ['nombre', 'deliveryName'],
    ['comuna', 'deliveryCommuna'],
    ['teléfono', 'deliveryPhone'],
    ['dirección', 'deliveryAddress'],
    ['precio', 'price'],
  ],
  columnsSelect: ['deliveryName', 'deliveryCommuna', 'deliveryPhone', 'deliveryAddress', 'price', 'opciones'],
  displayedColumns: ['deliveryName', 'deliveryCommuna', 'deliveryPhone', 'deliveryAddress', 'price', 'opciones'],
  480: ['deliveryName', 'opciones'],
  680: ['deliveryName', 'deliveryCommuna', 'deliveryPhone', 'opciones'],
  768: ['deliveryName', 'deliveryCommuna', 'deliveryAddress', 'opciones'],
  1024: ['deliveryName', 'deliveryCommuna', 'deliveryPhone', 'deliveryAddress', 'price', 'opciones'],
};