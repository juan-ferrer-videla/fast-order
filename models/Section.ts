import { Schema, model, models } from "mongoose";

const item = new Schema({
  title: String,
  description: String,
  price: Number,
});

const section = new Schema({
  title: String,
  subtitle: String,
  items: [item],
});

export const Section = models.Section || model("Section", section);
