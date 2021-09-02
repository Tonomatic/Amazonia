import React, { useState } from 'react';
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {

    //react hook, to manage state component
    const [products, setProducts] = useState([]);

    
    return (
        <div>
            <div className="rows center">
                {data.products.map((item) => (
                    <Product key={item._id} product={item} />
                ))}
            </div>
        </div>
    )
}
