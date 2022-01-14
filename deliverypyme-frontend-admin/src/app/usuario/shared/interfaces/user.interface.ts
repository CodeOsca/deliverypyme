import { Role } from "src/app/auth/shared/enums/roles.enum";
import { Commune } from "src/app/comunas/shared/interfaces/commune.interface";
import { PaymentType } from "../enums/payment-type.enum";

export interface User {
  _id: string;
  name: string;
  storeName: string;
  storeDetails: string;
  email: string;
  withdrawalAddress: string;
  phone: string;
  phoneTwo?: string;
  instagram?: string;
  website?: string;
  address: string;
  role: Role;
  image: string;
  commune: Commune;
  paymentType: PaymentType;
  comment: { rating: number; description: string; visible: boolean };
  status: boolean | string;
}
