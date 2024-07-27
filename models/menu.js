const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["Sweet", "Salty", "Spicy"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: [String],
    enum: ["chicken wings", "spices", "sauce"],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("menu", menuSchema);
