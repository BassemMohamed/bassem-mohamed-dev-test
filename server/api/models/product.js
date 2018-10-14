const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number },
    category: { type: Number },
    brand: { type: String }
});

module.exports = mongoose.model('Product', productSchema);