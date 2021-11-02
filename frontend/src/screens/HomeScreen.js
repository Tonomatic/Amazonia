import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
    //react hook, to manage state component
    const productList = useSelector( state => state.productList);
    const dispatch = useDispatch();
    const { loading, error, products } = productList;

    useEffect(() => {
        //sending ajax request
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
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
    )
}
