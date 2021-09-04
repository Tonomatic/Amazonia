import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function HomeScreen() {
    //react hook, to manage state component
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // array accepts list of dependecies. Function will run only once after rendering component

    useEffect(() => {
        //sending ajax request
        const fetch = async () => {
            try {
                setLoading(true);
                //the backend array, will be transformed into data
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetch();
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="rows center">
                    {products.map((item) => (
                        <Product key={item._id} product={item} />
                    ))}
                </div>
            )}
        </div>
    )
}
