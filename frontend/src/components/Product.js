import React from 'react';
import Rating from './Rating'

export default function Product(props) {
    const { product } = props;


    return (
        <div>
            <div key={item._id} className="card">
                <a href={`/product/${item._id}`}>
                    <img className="mediumImg" src={item.image} alt="product" />
                </a>
                <div className="card-body">
                    <a href={`/product/${item._id}`}>
                        <h2>{item.name}</h2>
                    </a>
                    <Rating rating={item.rating} numReviews={item.numReviews}></Rating>
                    <div className="price">${item.price}</div>
                </div>
            </div>
        </div>
    )
}
