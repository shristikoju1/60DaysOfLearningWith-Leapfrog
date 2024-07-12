import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import ProductSlice from "./ProductSlice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: ProductSlice
    }
});

export default store;
