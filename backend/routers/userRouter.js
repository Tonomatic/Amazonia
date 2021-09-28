const express = require('express');
const data = require('../data.js');
const User = require('../models/userModel.js');


const router = express.Router();

router.get('/seed', async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})

module.exports = router;
