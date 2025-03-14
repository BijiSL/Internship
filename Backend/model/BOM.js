const mongoose = require('mongoose');

const bomSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    stages: [{
        stageNumber: Number,
        processingTime: Number,
        requiredMachineTypes: [String],
        setupTime: Number,
        batchSize: Number
    }]
});

module.exports = mongoose.model('BOM', bomSchema);