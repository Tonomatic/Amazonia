import React from 'react';
import Product from '../components/Product';
import data from '../data';

export default function HomeScreen() {
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
