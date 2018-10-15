const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    image: { type: String, required: true  },
    price: { type: Number, required: true  },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: String }
});

module.exports = mongoose.model('Product', productSchema);