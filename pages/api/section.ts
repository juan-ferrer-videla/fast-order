// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Section } from "../../models/Section";
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
        const sections = await Section.find();
        console.log(sections);
        res.status(200).json(sections);
      } catch (error: any) {
        res.status(500).json({ msg: error.message });
      }

    case "POST":
      try {
        const newSection = new Section(body);
        const savedSection = await newSection.save();
        return res.status(201).json(savedSection);
      } catch (error: any) {
        res.status(500).json({ msg: error.message });
      }
    default:
      return res.status(404).json("This method is not supported");
  }
}
