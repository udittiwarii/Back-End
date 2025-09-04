const express = require('express')
const usermodel = require('../Model/user.model')
const jwt = require('jsonwebtoken')


const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = await usermodel.create({
        username, password
    })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)


    res.status(201).send({
        message: "user registered",
        user,
        token
    })
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await usermodel.findOne({
        username: username,
    })

    if (!user) {
        return res.status(404).send({
            message: 'User not found'
        })
    }

    const isPassword = password == user.password;

    if (!isPassword) {
        return res.status(401).send({
            message: 'Invalid password'
        })
    }

    res.status(200).send({
        message: 'Login successful'
    })
})

router.get('/user', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(401).json({
            message: 'unauthorized'
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await usermodel.findOne({
            _id: decode.id
        }).select('-password -__v')

        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            })
        };

        res.status(200).json({
            message: 'user fetched successfully',
            user,
        })

    } catch (err) {
        return res.status(401).json({
            message: 'unauthorized - invalid token'
        })
    }
})

module.exports = router;