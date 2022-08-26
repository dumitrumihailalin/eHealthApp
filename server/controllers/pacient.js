const Pacient = require("../models/Pacient");
const User = require("../models/User");

exports.store = async (req, res, next) => {
    try {
        console.log(req.body._userId)
        const data = await Pacient.create(req.body);
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
