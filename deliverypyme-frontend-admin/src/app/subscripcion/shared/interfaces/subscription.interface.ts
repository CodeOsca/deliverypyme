import { User } from "src/app/usuario/shared/interfaces/user.interface";
import { Status } from "../enums/status.enum";
import { Dispatch } from "../../../despachos/shared/interfaces/dispatch.interface";
export interface Subscription {
  _id: string;
  dispatches: Dispatch[];
  user: User;
  status: Status;
  canPay: boolean;
  amount: number;
  dateToPayment: Date;
  coupon?: null | { code: string; discountRate: number };
  capture?: null | string;
}
