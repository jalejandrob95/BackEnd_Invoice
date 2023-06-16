import { Request, Response } from "express";

//import services
import { InvoiceService } from "../services/invoice.service";

const invoice = new InvoiceService();

export const getSecuence = async (req: Request, res: Response) => {
  try {
    const getIndex = await invoice.getInvoice();
    res.status(200).json({
      request: "Create Invoice",
      data: getIndex,
    });
  } catch (error: any) {
    res.status(error.status || 500).json(error);
  }
};

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const { info, items, total, subTotal, taxAmmount } = req.body;

    const createInvoice = invoice.saveInvoice(
      info,
      items,
      total,
      subTotal,
      taxAmmount
    );

    res.status(200).json({
      request: "Create Invoice",
      data: createInvoice,
    });
  } catch (error: any) {
    res.status(error.status || 500).json(error);
  }
};
