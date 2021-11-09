import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import { listReviews } from '../actions/reviewActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { getAllUsers } from '../reducers/users';

export default function ProductScreen(props) {

    //compares and finds the product that matches url id
    const productDetails = useSelector(state => state.productDetails);
    const reviewsList = useSelector(state => state.reviewList);
    const [qty, setQty] = useState(1)
    const [state, setState] = useState(true)
    const user = useSelector(state => state.users);

    const { loading, error, product } = productDetails;
    const { reviews } = reviewsList;

    const dispatch = useDispatch();
    const productId = props.match.params.id;

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(detailsProduct(productId));
        dispatch(listReviews(productId))

        if (!reviews.length) {
            setState(false)
        }
    }, [dispatch, productId])

    console.log(reviews)


    const addToCartHandler = () => {
        //changes the rows in react application
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div className="grid-container2">
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <>
                    <div className="showcase">
                        <Link to="/">Back to Results</Link>
                        <div className="rows top">
                            <div className="col-3">
                                <img className="large" src={product.image} alt={product.name}></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li>
                                        <h1><b>{product.name}</b></h1>
                                    </li>
                                    <li>
                                        <Rating rating={Math.random() * 5} numReviews={product.numReviews} />
                                    </li>
                                    <li><b>Price :</b> ${product.price}</li>
                                    <li>
                                        <b>Description:</b>
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
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
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
                    <h1 className="main2">
                        <div style={{marginBottom:"2rem"}}>
                            <b>Reviews
                            </b>
                        </div>
                        <div style={{ border: "3px solid grey", padding: "1rem" }}>
                            {reviews?.map(each => (
                                <div style={{borderBottom:"1px solid grey",padding:"2rem",margin:"1rem"}}>
                                    <b>{user[each.userId-1].username} says:</b>
                                    <div>
                                        "{each.review}"
                                    </div>
                                </div>
                            ))}
                            {/* {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : state ? reviews?.map(each => (
                                <div style={{ borderBottom: "1px solid grey", padding: "2rem", fontSize:"1.5rem", margin: "1rem" }}>
                                    <b>{user[each.userId - 1].username}:</b>
                                    <div>
                                        "{each.review}"
                                    </div>
                                </div>
                            )) : (
                                <div style={{ fontWeight: "bold", padding: "1rem", margin: "1rem" }}>No Reviews</div>
                            )
                            } */}
                        </div>
                    </h1>
                </>
            )}
        </div>
    )
}
