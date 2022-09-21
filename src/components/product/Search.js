import React from 'react';
import "./Search.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MetaData from "../Layout/MetaData"
import { Fragment } from 'react';
const Search = () => {
  
  const navigate=useNavigate();

  const [keyword , setKeyword]=useState("");
  function searchSubmitHandler(){
   navigate(`/products/${keyword}`)
  }

  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
}


export default Search;