const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
    createAuction,
    getAllAuctions,
    getAuctionById,
    bidOnAuction,
    closeAuction,
} = require('../controllers/auctionController');
const router = express.Router();

router.post('/', protect, createAuction);
router.get('/', getAllAuctions);
router.get('/:id', getAuctionById);
router.post('/:id/bid', protect, bidOnAuction);
router.put('/:id/close', protect, closeAuction);

module.exports = router;
