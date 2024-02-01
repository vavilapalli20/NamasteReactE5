import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name: "card",
    initialState:{
        items:[],
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state,action) => {
            state.items.pop();
        },
        clearChart: (state,action) => {
            state.items.length =0;
        }
    }
});

export const {addItem, deleteItem, clearChart} = cardSlice.actions;

export default cardSlice.reducer;