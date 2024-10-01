type UserRole = "admin" | "comprador" | "vendedor" | undefined;

export interface IUser {
  _id?: string;
  firts_name?: string;
  last_name?: string;
  user_name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
  avatar?: string | undefined;
}

export interface IProduct {

  _id?: string;
  name?: string;
  description?: string;
  stock?: number;
  price?: number;
  category?: string;
  image?: string;
  seller_id?: string;

}

export interface ICategory {
  _id?: string,
  name: string
}

export interface ICart {
  _id?: string;
  user: string;
  products: { product_id: string; quantity: number }[];
  totalPrice: number;
}

export interface IOrder {
  _id?: string;
  user: string;
  products: { product_id: string; quantity: number, sub_total:number}[];
  totalPrice: number;
}

export interface ILogin {
  userId?: string,
  email?: string,
  role?: string
}

export interface INav {
  label:string,
  link:string
}
