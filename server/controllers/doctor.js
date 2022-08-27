const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Schedule = require("../models/Schedule");
const Pacient = require("../models/Pacient");


exports.store = async (req, res, next) => {
    try {

        const data = await Doctor.create(req.body);
        const findUser = await User.findById({_id: req.body._userId});
        await findUser.update({completed: true});

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}


exports.find = async (req, res, next) => {
    const { speciality, city, hospital } = req.body;
    try {
        const data = await Doctor.where({speciality: speciality, city: city, hospital: hospital}).exec();

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}



exports.info = async (req, res, next) => {
    try {
        const data = await Doctor.findOne({_userId: req.params.id});

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}

exports.schedule = async (req, res, next) => {
    try {
        const date = req.body.date;
        const time = req.body.time;

        const doctorId = req.body.doctorId;
        const pacientId = req.body.pacientId;
        const pacient = Pacient.findById(pacientId);
        const data = await Schedule.create({date: date, time: time, doctorId: doctorId, pacientId: pacientId})

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}
