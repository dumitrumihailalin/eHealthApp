const User = require("../models/User");
const doctor = require("../models/Doctor");

exports.getUsers = async (req, res, next) => {
    try {
        const data = await User.find();
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}


exports.getUser = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const data = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.updateUser = async (req, res, next) => {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!data) {
        return res.status(400).json({ success: false });
    }

    res.status(200).json({success: true, msg: 'User updated', data: data});
}


exports.deleteUser = (req, res, next) => {
    res.status(200).json({success: true, msg: 'create user'});
}

