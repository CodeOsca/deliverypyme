export interface Coupon {
  _id: string;
  name: string;
  code: string;
  discountRate: number;
  expirationTime: string;
  status: boolean | string;
  isValid: boolean | string;
}
