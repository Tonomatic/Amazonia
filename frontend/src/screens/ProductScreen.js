import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom'
import Rating from '../components/Rating';

export default function ProductScreen(props) {

    //compares and finds the product that matches url id
    const product = data.products.find(x => x._id === props.match.params.id)
    if (!product) {
        return <div>Product was not found</div>
    }
    return (
        <div>
            <Link to="/">Back to Results</Link>
            <div className="rows top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>Pirce : ${product.price}</li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="rows">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="rows">
                                    <div>Status</div>
                                    <div>{product.countInStock > 0 ? (
                                        <span className="success">In Stock</span>) : (
                                        <span className="error">Unavailable</span>
                                    )}

                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}
