import { Schema, model, models } from "mongoose";

const product = new Schema({
  count: Number,
  title: String,
  comment: String,
  price: Number,
});

const table = new Schema({
  table: Number,
  products: [product],
});

export const Table = models.Table || model("Table", table);
