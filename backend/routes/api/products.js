const express = require('express');
const asyncHandler = require('express-async-handler');
const { Products, Review, User } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const products = await Products.findAll()
    return res.json(products)
}))

router.get('/ten', asyncHandler(async function (req, res) {
    // const products = await Products.findAll({
    //     order: [['id', 'DESC']],
    //     limit: 10
    // })

    let productLimit = {
        limit: 10,
        order: [['id', 'DESC']]
    }

    const products = await Products.findAll(productLimit)

    return res.json(products)
}))

router.get('/:id', asyncHandler(async function (req, res) {

    const productId = parseInt(req.params.id, 10)

    const product = await Products.findByPk(productId)

    return res.json(product)
}))



module.exports = router;
