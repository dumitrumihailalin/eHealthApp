const Pacient = require("../models/Pacient");
const Schedule = require("../models/Schedule");
const User = require("../models/User");
const Consult = require("../models/Consult");
const Doctor = require("../models/Doctor");

exports.store = async (req, res, next) => {
    try {
        const { name, city, phone, _userId} = req.body;
        const data = await Pacient.create({ name: name, city: city, phone: phone, _userId: _userId});
        const findUser = await User.findById({_id: _userId});
        await findUser.update({completed: true});

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}


exports.list = async (req, res, next) => {
    try {
        console.log(req.params.id)
        const data = await Schedule.find({'doctorId': req.params.id});

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.find = async (req, res, next) => {

    try {
        const data = await Pacient.findOne({_userId: req.params.id});
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.result = async (req, res, next) => {

    try {
        const data = await Consult.create(req.body)
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.show = async (req, res, next) => {

    try {
        const result  = await Consult.find({pacientId: req.params.id})
        const doctor  = await Doctor.findOne({_userId: result[0].doctorId});
        
        const data = [{
            doctor: doctor,
            result: result
        }]
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}