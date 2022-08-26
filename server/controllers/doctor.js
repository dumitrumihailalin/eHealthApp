const Doctor = require("../models/Doctor");
const User = require("../models/User");

exports.store = async (req, res, next) => {
    try {
        console.log(req.body._userId)
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
    const { speciality } = req.body;
    try {
        const data = await Doctor.find({speciality: speciality});

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}


exports.schedule = async (req, res, next) => {
    console.log(req.body)
    try {
        const data = await Schedule.create(req.body)

        res.status(200).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
}
