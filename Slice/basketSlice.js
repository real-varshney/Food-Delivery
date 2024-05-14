import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addtobasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },

    removefrombasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);

      const copybasket = [...state.items];

      if(index >= 0){
        copybasket.splice(index, 1);
      }
      else{
        console.warn(`Can't remove from basket`)
      }

      state.items = copybasket;

    }
  },
})

// Action creators are generated for each case reducer function
export const {addtobasket,removefrombasket  } = basketSlice.actions

export const selectBasketItem = (state) => state.basket.items

export const selectBasketWithId = (state, id) => state.basket.items.filter(item => item.id === id)

export const selectBasketTotal = (state) => state.basket.items.reduce((total , item)=>{
  return total += item.price
}, 0)
export default basketSlice.reducer