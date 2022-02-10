import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {

}

const slice = createSlice({
  name: 'Dvision Client Api Document',
  initialState,
  reducers:{
    SET_StateVriable: (state, action) => { return { ...state, stateVariable: action.payload }}
  }
})

export const { SET_StateVriable } = slice.actions;
export default configureStore({ reducer: slice.reducer });