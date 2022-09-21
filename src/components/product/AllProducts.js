import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearError, getProducts } from '../../actions/product'
import ProductCard from '../Home/ProductCard'
import Loader from '../Layout/Loader'
import MetaData from '../Layout/MetaData'
import "./AllProducts.css"
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";


const AllProducts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const categories=["all","duffle" , "24inche" , "28inche" , "plastic"];
  const [price , setPrice]=useState([0,10000]);
  const [category , setCategory]=useState();
  const [clicked , setClicked]=useState("all");
  const alert=useAlert();
  const { error, loading, products, filteredProductsCount, resultPerPage } = useSelector((store) => {
    return store.productsArray
  })
 
 
  const count = filteredProductsCount;

  function setCurrentPageNo(pg) {
    setCurrentPage(pg);
  }
  function priceHandler(e,newPrice){
    setCurrentPage(1);
    console.log(newPrice);
     setPrice(newPrice);
  }

  function handleCategory(category,event){
    setCurrentPage(1);
    setCategory((prev)=>{
      return prev===category?null:category
    })
    setClicked(category);
    event.target.classList.add('clicked')
   // event.target.classList.remove('categoryType')
    console.log(event.target.classList);
    console.log(event.target)
  }

  useEffect(() => {
    if(error){
      alert.error(error);
    }
    
    dispatch(getProducts(keyword, currentPage,category,price))
  }, [dispatch, currentPage,category,price])

  return (
    <Fragment>
      {loading ? (<Loader />) : ( 
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products && products[0] && products.map((product) => {

              return <Fragment>
                {product && <ProductCard key={product._id} product={product} />}
              </Fragment>
            })}
          </div>



          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={10000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={(event)=>handleCategory(category,event)}
                >
                  <span className={`categoryType ${clicked===category?"clicked":null}`}  >{category}</span>
                </li>
              ))}
            </ul>

          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={count}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>

      )
      }

    </Fragment >

  )
}

export default AllProducts