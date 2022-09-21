import './App.css';
import React, { useEffect } from 'react'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Home from './components/Home/Home'
import ProductDetails from './components/product/productDetails';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AllProducts from './components/product/AllProducts';
import Search from './components/product/Search';
import LoginSign from './components/user/LoginSign';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import { UserOptions } from './components/Layout/Header/UserOptions';
import Profile from './components/user/Profile';
import UpdateUser from './components/user/UpdateUser';
import UpdatePassword from './components/user/UpdatePassword';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  },[dispatch])
     

  const { user, isAuthenticated } = useSelector((state) => { return state.user })
  return (
    <Router >
      {isAuthenticated&& <UserOptions user={user}/>}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/EcommerceClient" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
        <Route exact path="/products" element={<AllProducts />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route path="/products/:keyword" element={<AllProducts />}></Route>
        <Route exact path="/login" element={<LoginSign />}></Route>
        <Route exact path="/account" element={<Profile/>}></Route>
        <Route exact path="/me/update" element={<UpdateUser/>}></Route>
        <Route exact path="/password/update" element={<UpdatePassword/>}></Route>
        <Route exact path="*" element={<Home />}> </Route>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
