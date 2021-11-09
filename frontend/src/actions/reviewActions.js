import Axios from "axios";
import { REVIEW_LIST_FAIL, REVIEW_LIST_REQUEST, REVIEW_LIST_SUCCESS } from "../constants/reviewConstants";

//define first action function
export const listReviews = (productId) => async (dispatch) => {
    dispatch({
        type: REVIEW_LIST_REQUEST,
        payload: productId
    });

    try {
        const { data } = await Axios.get(`/api/products/${productId}/reviews`);
        dispatch({ type: REVIEW_LIST_SUCCESS, payload: data })
    } catch (error) {
        //dispatching fail scenario
        dispatch({ type: REVIEW_LIST_FAIL, payload: error.message })
    }
}
