import axios from "axios";

import {
    ALL_PRODUCT_FAILURE,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERROR
} from "../constants/productConstants"



export const getProducts=(keyword="", currentPage=1, category ,price=[0,10000] )=>{
    console.log(keyword);
    const path="https://serverofecommercer.herokuapp.com";
    const pathLocal="http://localhost:4000"
    return async(dispatch)=>{
 try {
    dispatch({
        type:ALL_PRODUCT_REQUEST
    })
    console.log(keyword);
    category=category==="all"?null:category;

  

    let link = `${path}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

    if (category) {
      link = `${path}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
    }
    console.log(link)
    const {data}= await axios.get(link)
    console.log(data)
    dispatch({
        type:ALL_PRODUCT_SUCCESS,
        payload:data
    })

 } catch (error) {
    console.log(error.message);
    dispatch({
        type:ALL_PRODUCT_FAILURE,
        payload:error.message
    })
 }
}
}


export const clearError=()=>{
    return async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    })
}
}