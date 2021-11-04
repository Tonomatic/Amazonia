import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, listProducts } from '../actions/productActions';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    //react hook, to manage state component
    const productList = useSelector(state => state.productList);
    const productDetails = useSelector(state => state.productDetails);
    const dispatch = useDispatch();
    const { loading, error, products } = productList;

    const componentLoad = (x) => {
        if (!loading && !error) {
            return `/product/${x}`
        }

    }

    const handleClick = () => <Link to="/cart" />
    useEffect(() => {
        //sending ajax request
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="grid-container2">
            <div className="showcase">
                Featured
                <Carousel variant="dark" style={{ padding: "0px 0px 0px 200px" }}>
                    <Carousel.Item>
                        <Link
                            to={componentLoad(12 + 1)}
                        >
                            <img
                                className="d-block w-100 large"
                                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                                alt="Second slide"
                            />
                        </Link>
                        <Link
                            to={componentLoad(12 + 1)}
                        >
                            <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                                {loading ? (
                                    <LoadingBox></LoadingBox>
                                ) : error ? (
                                    <MessageBox variant="danger">{error}</MessageBox>
                                ) : (
                                    <h5>
                                        {products[12].name}
                                    </h5>
                                )}
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link
                            to={componentLoad(13 + 1)}
                        >                            <img
                                className="d-block w-100 large"
                                src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                                alt="Second slide"
                            />
                        </Link>
                        <Link
                            to={componentLoad(13 + 1)}
                        >
                        <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                            {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                                <h5>
                                    {products[13].name}
                                </h5>
                            )}
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Link
                            to={componentLoad(10 + 1)}
                        >
                        <img
                            className="d-block w-100 large"
                            src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                            alt="Third slide"
                        />
                        </Link>
                        <Link
                            to={componentLoad(10 + 1)}
                        >
                        <Carousel.Caption style={{ paddingBottom: "5rem", width: "70rem", paddingLeft: "15%" }}>
                            {loading ? (
                                <LoadingBox></LoadingBox>
                            ) : error ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                            ) : (
                                <h5>
                                    {products[10].name}
                                </h5>
                            )}
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="main2">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="rowsHome center">
                        {products.map((item) => (
                            <Product key={item.id} product={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
