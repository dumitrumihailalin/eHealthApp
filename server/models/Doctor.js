const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, "Name can be 50 characters"]
    },
    hospital: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, "Name can be 50 characters"]
    },
    speciality: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, "Name can be 50 characters"]
    },
    city: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, "Name can be 50 characters"]
    },
    phone: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, "Name can be 50 characters"]
    },
    _userId: {
        type: String
    }
})

module.exports = mongoose.model('Doctor', DoctorSchema);
