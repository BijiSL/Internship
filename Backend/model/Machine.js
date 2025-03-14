const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    machineId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    efficiency: { type: Number, required: true },
    priority: { type: Number, required: true },
    availableHours: [{
        start: Date,
        end: Date
    }],
    maintenanceSchedule: [{
        start: Date,
        end: Date
    }],
    currentLoad: { type: Number, default: 0 }
});

module.exports = mongoose.model('Machine', machineSchema);