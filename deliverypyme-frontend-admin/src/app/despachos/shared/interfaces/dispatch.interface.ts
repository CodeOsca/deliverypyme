import { Status } from "../enums/status.enum";
import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { Product } from "./product.interface";

export interface Dispatch {
  _id: string;
  user: User;
  retirementDate: Date;
  amount: number;
  products: Product[];
  status: Status;
  code: number;
  coupon?: null | { code: string; discountRate: number };
  capture?: null | string;
}
