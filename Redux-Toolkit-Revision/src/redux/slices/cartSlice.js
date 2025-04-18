import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.products = [...state.products, action.payload]
        },
    }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;