import db from "../db/models";

export const writeTransactionToDatabse = async (data: any) => {
  return await db.Transaction.create({
    id: data.charge.id,
    order_id: data.order.id,
    object: data.charge.object,
    amount: data.charge.amount,
    currency: data.charge.currency,
    description: data.charge.description,
    failure_message: data.charge.failure_message,
    source_id: data.charge.source.id,
    source_object: data.charge.source.object,
    source_brand: data.charge.source.brand,
    source_message: data.charge.source.message,
    status: data.charge.status,
  });
};
