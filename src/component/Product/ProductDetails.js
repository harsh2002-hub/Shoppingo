import React, { Fragment, useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import {useParams} from "react-router-dom"
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js"

const ProductDetails = () => {

    const {id}= useParams();
    // console.log(id);
    const dispatch=useDispatch();
    const alert=useAlert();

    const {product,loading,error}=useSelector(state=>state.productDetails)
    // console.log(product);
    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
      dispatch(getProductDetails(id));
    },[dispatch,id,error,alert]);

    const options = {
        size: "large",
        value: product.rating,
        readOnly: true,
        precision: 0.5,
      };

  return (
      <Fragment>
      <MetaData title={`${product.name}__YourCart `} />
        {loading?<Loader/> :(<Fragment>
      <div className='ProductDetails'>

      <div>
              {/* <Carousel> */}
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              {/* </Carousel> */}
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
                   

              <div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button /*onClick={decreaseQuantity} */>-</button>
                    <input readOnly type="number" /*value={quantity}*/ />
                    <button /*onClick={increaseQuantity} */>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    /*onClick={addToCartHandler}*/
                  >
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>


              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              <button /*onClick={submitReviewToggle} */ className="submitReview">
                Submit Review
              </button>
              </div>
      </div>
      <h3 className="reviewsHeading">REVIEWS</h3>
      {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard /*key={review._id}*/ review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}

      </Fragment>)}
      </Fragment>
  )
}

export default ProductDetails