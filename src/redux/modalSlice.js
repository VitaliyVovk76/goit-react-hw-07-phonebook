import { createSlice } from '@reduxjs/toolkit'
const initialState = false

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(_, action) {
      return !action.payload
    },
  },
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
