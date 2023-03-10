import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "@/global/interfaces/IProduct";


const initialState:IProduct[]  = []

export const savedItems = createSlice({
  name: 'savedItems',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<{id: string}>) => {
      return state.filter(p => p.id !== action.payload.id)
    }
  }
})

export const savedItemsReducer = savedItems.reducer
export const savedItemsActions = savedItems.actions