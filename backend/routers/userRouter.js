const express = require('express');
const data = require('./data.js');
const User = require('../models/userModel.js');


const userRouter = express.Router();

userRouter.get('/seed', async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
})

export default userRouter;
