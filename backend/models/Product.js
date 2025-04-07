const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  unit: String,
  quantityUsed: Number,
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  materials: [MaterialSchema],
  laborTimeMinutes: Number,
  laborRate: Number,
  markupPercentage: Number,
  baseCost: Number,
  finalPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
