import { TypeReference } from "./../../../ordenes/shared/enums/type-reference.enum";
export interface Revision {
  _id: string;
  storeName: string;
  name: string;
  typeReference: TypeReference;
  amount: number;
}
