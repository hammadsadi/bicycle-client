import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/bicycle.types";

type TInitialState = {
  products: { product: string; quantity: number }[];
  checkoutProducts: TProduct[];
  totalPrice: number;
};
const initialState: TInitialState = {
  products: [],
  checkoutProducts: [],
  totalPrice: 0,
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isExistProduct = state.products.find(
        (prod) => prod.product === action.payload._id
      );
      if (isExistProduct) {
        state.totalPrice += action.payload.price;
        isExistProduct.quantity += 1;
      } else {
        state.totalPrice += action.payload.price;
        state.products.push({ product: action.payload._id, quantity: 1 });
        state.checkoutProducts.push(action.payload);
      }
    },
  },
});

export const { addProduct } = checkoutSlice.actions;

export default checkoutSlice.reducer;
