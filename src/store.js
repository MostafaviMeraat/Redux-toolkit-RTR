import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './slices/toggleSlice'
import incOrHide from './slices/incOrdec'

export const store = configureStore({
  reducer: {
    showHide: toggleSlice.reducer,
    incOrHide: incOrHide
  }
})