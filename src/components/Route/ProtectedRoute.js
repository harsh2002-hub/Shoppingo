import React, { Fragment } from 'react'
import {useSelector} from "react-redux";
import { Route,NavLink } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const { user, isAuthenticated, loading } = useSelector( (state) => { return state.user });


    // <Fragment>
        {/* {loading===false &&  */}
    return ( <Route 
          {...rest}
          render={
            (props)=>{
                if(isAuthenticated===false)
                 return <NavLink to={"/login"} />

                return <Element {...props} />;
            }
          }
        ></Route>
  )
}

export default ProtectedRoute