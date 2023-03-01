import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProd = state.product.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProd) {
        findProd.count++;
      } else {
        state.product.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.product.reduce((sum, obj) => {
        return (obj.salePrice * obj.count ) + sum;
      }, 0);
    },
    deletedProduct(state, action) {
      state.product = state.product.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.product.reduce((sum, obj) => {
        return (obj.salePrice * obj.count ) + sum;
      }, 0);
    },
    minusProd(state,action){
        const findProd = state.product.find((obj) => obj.id === action.payload);
  
        if (findProd) {
            findProd.count--;
            state.totalPrice = state.product.reduce((sum, obj) => {
              return (obj.salePrice * obj.count ) + sum;
            }, 0);
  
      }
    },
  },
});

export const { addProduct, deletedProduct,minusProd } = cartSlice.actions;

export default cartSlice.reducer;
