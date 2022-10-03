import { configureStore, createSlice } from '@reduxjs/toolkit'


const toggleSlice = createSlice({
  name: 'showOrHide',
  initialState: { value: false },
  reducers: {
    showOrHide: (state, action) => {
      console.log(action.payload);
      state.value = action.payload.value
    }
  }
})

export const { showOrHide } = toggleSlice.actions

export const store = configureStore({
  reducer: {
    showHide: toggleSlice.reducer
  }
})