const Auction = require('../models/Auction');
const Product = require('../models/Product');

exports.createAuction = async (req, res) => {
    const { product, startTime, endTime, auctionType } = req.body;
    try {
        const auction = await Auction.create({ product, startTime, endTime, auctionType });
        res.status(201).json(auction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllAuctions = async (req, res) => {
    try {
        const auctions = await Auction.find().populate('product');
        res.json(auctions);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id).populate('product');
        if (!auction) return res.status(404).json({ message: 'Auction not found' });
        res.json(auction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.bidOnAuction = async (req, res) => {
    const { bidAmount } = req.body;
    try {
        const auction = await Auction.findById(req.params.id);
        if (!auction) return res.status(404).json({ message: 'Auction not found' });
        auction.product.bidHistory.push({ user: req.user._id, bidAmount });
        auction.product.currentBid = bidAmount;
        await auction.save();
        res.json(auction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.closeAuction = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        if (!auction) return res.status(404).json({ message: 'Auction not found' });
        auction.product.status = 'sold';
        await auction.save();
        res.json(auction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
