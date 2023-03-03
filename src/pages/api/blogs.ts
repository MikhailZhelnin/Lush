import type { NextApiRequest, NextApiResponse } from 'next'


import {IBlog} from "../../../models";
import {blogs} from "@/pages/api/blogs-data";

type Data = {
  products: IBlog[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBlog[]>
) {
  res.status(200).json(blogs)
}
