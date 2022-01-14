import { Role } from "./../enums/roles.enum";
export interface UserLogin {
  email: string;
  password: string;
}

export interface ModifyPassword {
  password: string;
  repeatPassword: string;
}

export interface CurrentUser {
  _id: string;
  role: Role;
}
