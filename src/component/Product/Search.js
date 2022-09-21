import React,{useState,Fragment} from 'react'
import MetaData from '../layout/MetaData';
import "./Search.css"
import { useNavigate,Navigate } from "react-router-dom";
const Search = ({}) => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    console.log(keyword);
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
          navigate(`/products/${keyword}`, {replace:true});
        
        } else {
        navigate("/products", {replace:true});
        }
      };

  return (
    <Fragment>
    <MetaData title="Search A Product__YourCart" />
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
};

export default Search