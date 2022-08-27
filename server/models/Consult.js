const mongoose = require('mongoose');

const ConsultSchema = new mongoose.Schema({
    pacientId: {
        type: String
    },
    doctorId: {
        type: String
    },
    found: {
        type: String
    },
    solution: {
        type: String
    }
})

module.exports = mongoose.model('Consult', ConsultSchema);
