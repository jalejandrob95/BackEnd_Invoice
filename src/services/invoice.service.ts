import { InvoiceSchemas } from "../models";

interface IInfoData {
  billFrom: string;
  invoiceNumber: number;
}

interface IInfo {
  products: IInfoData;
}
interface IProduct {
  quantity: number;
  currency: number;
  description: string;
  name: string;
}
interface Items {
  items: IProduct[];
}

interface ITotal {
  total: number;
}
interface ISubtotal {
  total: number;
}
interface ITaxAmmount {
  taxAmmount: number;
}

export class InvoiceService {
  async saveInvoice(
    info: IInfo,
    items: Items,
    total: ITotal,
    subTotal: ISubtotal,
    taxAmmount: ITaxAmmount
  ) {
    try {
      const saveInvoice = new InvoiceSchemas({
        info,
        items,
        total,
        subTotal,
        taxAmmount,
      });

      await saveInvoice.save();

      return saveInvoice;
    } catch (error) {
      console.log(error);
    }
  }
  async getInvoice() {
    try {
      const getInvoiceNumber = await InvoiceSchemas.find()
        .sort("-_id")
        .limit(1);
      return getInvoiceNumber[0].info;
    } catch (error) {
      console.log(error);
    }
  }
}
