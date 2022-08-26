const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    date: { type : Date, default: Date.now },
    time: {
        type: string,
    },
    pacientId: {
        type: String
    },
    doctorId: {
        type: String
    }
})

module.exports = mongoose.model('Schedule', ScheduleSchema);
