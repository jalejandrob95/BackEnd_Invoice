import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IInvoice {
  info: Object;
  items: Array<Object>;
  total: Number;
  subtotal: Number;
  taxAmmount: Number;
}

const InvoiceSchema = new Schema<IInvoice>({
  info: { type: Object },
  items: { type: [{ type: mongoose.Schema.Types.Mixed }] },
  total: { type: Number },
  subtotal: { type: Number },
  taxAmmount: { type: Number },
});

const InvoiceSchemas = mongoose.model(
  "InvoiceSchema",
  InvoiceSchema,
  "InvoiceSchema"
);

export default InvoiceSchemas;
