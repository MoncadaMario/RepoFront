import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: string; 
    nombre: string;
    categoria: string;
    precio: number;
    cantidad: number;
}

const initialState : Product[] = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {return action.payload},
    },
});

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;