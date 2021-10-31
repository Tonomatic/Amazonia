const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const axios = require("axios");

let dat = {};

axios.get("https://fakestoreapi.com/products")
    .then(function (response) {
        let temp = response.data
        let newFile = [];
        temp.map(obj => {
            let tempObject =
            {
                name: obj.title,
                category: obj.category,
                image: obj.image,
                price: obj.price,
                countInStock: 10,
                numReviews: 0,
                description: obj.description,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            newFile.push(tempObject)

        })

    })
