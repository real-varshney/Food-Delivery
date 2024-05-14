import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Slice/basketSlice'
import restaurantReducer from './Slice/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket : basketReducer,
    restaurant : restaurantReducer,
  },
})