import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { updatePassword, userLoginReducer, userUpdateReducer } from "./reducers/userReducer";




let initialState = {};
  
  const middleware = [thunk];

const reducer = combineReducers({
   productsArray:productReducer,
   productDetails:productDetailsReducer,
   user:userLoginReducer,
   profile:userUpdateReducer,
   forgotPassword:updatePassword
});

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

  );

 export default store; 