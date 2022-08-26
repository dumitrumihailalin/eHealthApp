const User = require('../models/User');
const asyncHandler = require('../middleware/async').default;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');

exports.register =  async (req, res, next) => {
    const { cnp, password } = req.body;
    
    if (!cnp || !password) {
        res.status(400).json({success: false});
    }

    try {
        const data = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: data
        })
    } catch(err) {
        res.status(400).json({success: false});
    }
};

exports.login = async (req, res, next) => {
    const { cnp, password } = req.body;

    if (!cnp || !password) {
        res.status(400).json({success: false});
    }

    const passwordHash = await bcrypt.hashSync(password, SALT_WORK_FACTOR);
    const user = await User.findOne({cnp});
    console.log(user)
    if (!user) {
        res.status(400).json({success: false});
    }    

    if (!bcrypt.compareSync(password, passwordHash)) {
        res.status(400).json({success: false});

    }

    const token = jwt.sign(
        { id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

    res.status(200).json({ success: true, user, token});
}