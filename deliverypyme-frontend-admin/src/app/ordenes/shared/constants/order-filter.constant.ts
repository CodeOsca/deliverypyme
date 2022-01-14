import { TypeReference } from "./../enums/type-reference.enum";
import { PaymentMedia } from "./../enums/media-payment.enum";

export const filterOptions = [
  PaymentMedia.FLOW,
  PaymentMedia.TRANSFER,
  TypeReference.DISPATCH,
  TypeReference.SUBSCRIPTION,
];
