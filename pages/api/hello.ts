// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Table } from "../../models/Table";
import { connectToDB } from "../../utils/mongoose";

type Data = {
  name: string;
};

connectToDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tables = await Table.find({});
  console.log(tables);
  res.status(200).json({ name: "John Doe" });
}
