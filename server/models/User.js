const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;


const UserSchema = new mongoose.Schema({
    cnp: {
        type: String,
        required: [true, 'Please add a CNP'],
    },
    password: {
        type: String,
        select: false,
        required: [true, 'Please add a password'],
    },
    role: {
        type: String,
        select: true
    },
    completed: {
        type: Boolean,
        select: true
    },
})

UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});



module.exports = mongoose.model('User', UserSchema);
