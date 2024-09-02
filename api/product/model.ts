import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

const Product = model("Product", productSchema);

export default Product;