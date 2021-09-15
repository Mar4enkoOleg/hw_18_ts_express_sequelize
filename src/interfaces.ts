export interface UserAttributes {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  password: string;
  customer_number?: string;
}

export interface OrderAttributes {
  id: number;
  user_id: number;
}

export interface TransactionAttributes {
  id: number;
  order_id: number;
  object: string;
  amount: number;
  currency: string;
  description?: string;
  failure_message?: string | null;
  source_id: string;
  source_object: string;
  source_message: string;
  source_brand: string;
  status: string;
}
