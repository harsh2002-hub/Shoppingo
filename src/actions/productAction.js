import axios from "axios";
import {ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/productConstants"
// Get All Products
export const getProduct =(keyword="",currentPage=1,price=[0,10000],category,ratings=0) =>async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

       console.log("helo");
      // let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${ratings}`;
    
      let link = `https://shoppingo-backend-vercel-cptjl2w03-harsh2002-hub.vercel.app/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&rating[gte]=${ratings}`;
      console.log(link);
      if (category) {
       // link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${ratings}`;
      link = `https://shoppingo-backend-vercel-cptjl2w03-harsh2002-hub.vercel.app/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&rating[gte]=${ratings}`;

      }
      const {data} = await axios.get(link);
      // console.log(data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data
      });

    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL ,
        payload:error.message
      });
    }
  };


  // Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    // let link=`http://localhost:4000/api/v1/product/${id}`;
    let link=`https://shoppingo-backend-vercel-cptjl2w03-harsh2002-hub.vercel.app/api/v1/product/${id}`
    console.log("link is:"+link);
    const { data } = await axios.get(link);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
  
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };