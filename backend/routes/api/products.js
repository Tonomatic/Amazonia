const express = require('express');
const asyncHandler = require('express-async-handler');
const { Products, Review, User } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const products = await Products.findAll()
    return res.json(products)
}))



module.exports = router;
