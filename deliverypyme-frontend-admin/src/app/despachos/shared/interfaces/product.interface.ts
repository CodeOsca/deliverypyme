import { Commune } from "src/app/comunas/shared/interfaces/commune.interface";

export interface Product {
  _id: string;
  deliveryCommuna: Commune;
  deliveryName: string;
  deliveryAddress: string;
  deliveryPhone: string;
  observations: string;
  addressDetails: string;
  createdAt: Date;
  price: number;
  calendar: boolean;
}
