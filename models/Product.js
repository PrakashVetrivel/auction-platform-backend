const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startingPrice: { type: Number, required: true },
    currentBid: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'sold'], default: 'active' },
    bidHistory: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            bidAmount: { type: Number, required: true },
            bidTime: { type: Date, default: Date.now },
        },
    ],
});

module.exports = mongoose.model('Product', ProductSchema);
