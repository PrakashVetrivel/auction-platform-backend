const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    auctionType: { type: String, enum: ['traditional', 'reverse', 'sealed'], required: true },
});

module.exports = mongoose.model('Auction', AuctionSchema);
