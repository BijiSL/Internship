const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    deliveryDate: { type: Date, required: true },
    items: [{
        productId: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, default: 'pending' },
    scheduledStartDate: Date,
    scheduledEndDate: Date
});

module.exports = mongoose.model('Order', orderSchema);