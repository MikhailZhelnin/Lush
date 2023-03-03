import type { NextApiRequest, NextApiResponse } from 'next'

import {products} from "@/pages/api/products-data";
import {IProduct} from "../../../models";

type Data = {
  products: IProduct[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json(products)
}
