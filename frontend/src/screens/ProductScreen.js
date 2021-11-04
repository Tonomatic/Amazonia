import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {

    //compares and finds the product that matches url id
    const productDetails = useSelector(state => state.productDetails);
    const [qty, setQty] = useState(1)
    const { loading, error, product } = productDetails;
    const dispatch = useDispatch();
    const productId = props.match.params.id;

      useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId])

    const addToCartHandler = () => {
        //changes the rows in react application
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Link to="/">Back to Results</Link>
                    <div className="rows top">
                        <div className="col-3">
                            <img className="large" src={product.image} alt={product.name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    <Rating rating={Math.random() * 5} numReviews={product.numReviews} />
                                </li>
                                <li>Price : ${product.price}</li>
                                <li>
                                    Description:
                                    <p>{product.description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-bodyy">
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
                                                <span className="danger">Unavailable</span>
                                            )}

                                            </div>
                                        </div>
                                    </li>
                                    {
                                        product.countInStock > 0 && (
                                            <>
                                            <li>
                                                <div className="rows">
                                                    <div>Qty</div>
                                                    <div>
                                                        <select value={qty} onChange={e => setQty(e.target.value)}>
                                                            {
                                                                [...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x+1} value={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                            </li>
                                            </>
                                        )
                                    }
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
