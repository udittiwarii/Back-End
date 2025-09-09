const express = require('express');
const Usermodel = require('../Model/user.model')
const jwt = require('jsonwebtoken')
const router = express.Router();

// Define your authentication routes here


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const isuser = await Usermodel.findOne({ username })

    if (isuser) {
        return res.status(409).send({ msg: "User already exists" })
    }

    const user = await Usermodel.create({ username, password })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.cookie('token', token)

    res.status(201).json({
        message: "User registered successfully",
    })
})

router.get('/user', async (req, res) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized user , Token not found"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await Usermodel.findOne({
            _id: decoded.id
        }).select('-password -__v')

        return res.status(200).json({
            message: "User fetched successfully",
            user
        })
    } catch (err) {
        res.status(401).json({
            message: "Unauthorized user , Token not valid"
        })
    }

})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Usermodel.findOne({
        username: username
    })

    if (!user) {
        return res.status(401).json({
            message: 'Invalid username '
        })
    }

    const ispassword = password == user.password

    if (!ispassword) {
        return res.status(401).json({
            message: 'Invalid password'
        })
    }
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET
    )
    res.cookie('token', token, {
        maxAge: 15 * 60 * 1000
    })


    res.status(200).json({
        message: "User logged in successfully"
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        message: "User logged out successfully"
    })
})

module.exports = router;