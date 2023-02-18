// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Table } from "../../models/Table";
import { connectToDB } from "../../utils/mongoose";

connectToDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const tables = await Table.find();
        console.log(tables);
        res.status(200).json(tables);
      } catch (error: any) {
        res.status(500).json({ msg: error.message });
      }

    case "POST":
      try {
        const newTable = new Table(body);
        const savedTable = await newTable.save();
        return res.status(201).json(savedTable);
      } catch (error: any) {
        res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(404).json("This method is not supported");
  }
}
