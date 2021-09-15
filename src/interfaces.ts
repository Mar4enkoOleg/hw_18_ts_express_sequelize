export interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  password: string;
}

export interface OrderAttributes {
  id: number;
  user_id: number;
}

export interface TransactionAttributes {
  id: number;
  order_id: number;
}
