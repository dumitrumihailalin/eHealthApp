const Pacient = require("../models/Pacient");
const Schedule = require("../models/Schedule");
const User = require("../models/User");


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
        const doctorId = req.params.id
        const data = await Schedule.find({doctorId: doctorId});
        const pacients = new Array();
        data.forEach(element => {
            pacients.push(element.pacientId);
        });
        data.records = await Pacient.find({ '_userId': { $in: pacients } });
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
        const data = await Pacient.findOne({userId: req.params._id});
        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

