const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    date: { type : String},
    time: {
        type: String,
    },
    pacient: {
        type: String
    },
    doctorId: {
        type: String
    }
})

module.exports = mongoose.model('Schedule', ScheduleSchema);
