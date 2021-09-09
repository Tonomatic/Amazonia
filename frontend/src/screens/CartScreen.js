import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    //this returns value after question mark
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();


    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [productId, qty, dispatch])
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
        </div>
    );
}
