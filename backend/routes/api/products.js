const express = require('express');
const asyncHandler = require('express-async-handler');
const { Products, Review, User, Rating } = require('../../db/models')
const { requireAuth } = require("../../utils/auth")
const Sequelize = require('sequelize')
const router = express.Router();



router.get('/', asyncHandler(async function (req, res) {
    const products = await Products.findAll()
    return res.json(products)
}))



//test route for 10 products
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



router.get('/:id', requireAuth, asyncHandler(async function (req, res) {

    const productId = parseInt(req.params.id, 10)

    const product = await Products.findByPk(productId);

    return res.json(product)
}))



//gets all reviews for a specific product
router.get('/:productId/reviews',  asyncHandler(async function (req, res) {
    const productId = parseInt(req.params.productId, 10)

    const reviews = await Review.findAll({
        where: {
            productId
        }
    })
    return res.json(reviews)
}))



//gets user's review for a specific product
router.get('/:productId/review', requireAuth, asyncHandler(async function(req, res) {
    const productId = parseInt(req.params.productId, 10)
    const userId = req.user.id
    const review = await Review.findByPk({
        where: {
            productId,
            userId
        }
    })

    return res.json(review)

}))


//creates review on product
router.post('/:productId/review', requireAuth, asyncHandler(async function(req, res) {
    const productId = parseInt(req.params.productId, 10)
    const userId = req.user.id
    let newReview = {
        userId,
        productId,
        review: req.body.text
    }

    const review = await Review.create(newReview)
}))


//gets the avg of all ratings for a specific product
router.get('/:productId/ratings',  asyncHandler(async function (req, res) {
    const productId = parseInt(req.params.productId, 10)

    const rating = await Rating.findAll({
        where: {
            productId
        },
        attributes: [[Sequelize.fn('AVG', Sequelize.col('rating')), 'rating']],
    });

    return res.json(rating)
}))



//gets specific user's rating of specific product
router.get('/:productId/rating', requireAuth, asyncHandler(async function(req, res) {
    const productId = parseInt(req.params.productId, 10)
    const userId = req.user.id
    const rating = await Review.findByPk({
        where: {
            productId,
            userId
        }
    })

    return res.json(rating)

}))



//creates rating for specific product and/or updates it if one already exists
router.post('/:productId/rating', asyncHandler(async function (req, res) {
    const productId = parseInt(req.params.productId, 10)
    const userId = req.user.id
    const score = req.body.rating
    const previous = await Rating.findOne({
        where: {
            userId,
            productId
        }
    })

    if(previous) {
        previous.rating = score;
        await previousRating.save();
        res.sendStatus(204)
    } else {
        const newRating = await Rating.create({
            userId,
            productId,
            rating: score
        })
        res.sendStatus(201)
    }

}))



    // let avgRating = await Rating.findAll({
    //     where: {
    //         productId
    //     },
    //     attributes: [[Sequelize.fn('AVG', Sequelize.col('rating')), 'rating']]
    // });

    // let prevRating = await Rating.findOne({
    //     where: {
    //         userId,
    //         productId
    //     }
    // })

    // avgRating = parseFloat(avgRating[0].dataValues.rating).toFixed(1)

    // if (isNaN(avgRating)) {
    //     avgRating = 'N/A'
    // }

    // let reviews = await Review.findAll({
    //     where: {
    //         productId
    //     },
    //     include: [
    //         {
    //             model: User,
    //             include: [
    //                 {
    //                     model: Rating,
    //                     required: false,
    //                     where: {
    //                         productId
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // })

    // let ownReview = await Review.findOne({ where: { userId, productId }, include: [User] });
    // //if we have a review
    // if(ownReview) {
    //     ownReview.reviewDate = ownReview.createdAt.toDateString() + ' ' + ownReview.createdAt.toLocaleTimeString();
    // }

    // Object.keys(reviews).map(index => {
    //     reviews[index].reviewDate = reviews[index].createdAt.toDateString() + ' ' + reviews[index].createdAt.toLocaleTimeString();
    // });

    // return res.send({product, reviews, avgRating, prevRating, userId, ownReview})



module.exports = router;
