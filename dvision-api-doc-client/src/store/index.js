import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  member: null,
  apiList: null,
  api: null
}

const slice = createSlice({
  name: 'Dvision Client Api Document',
  initialState,
  reducers:{
    SET_MEMBER: (state, action) => { return { ...state, member: action.payload }},
    SET_APILIST: (state, action) => { return {...state, apiList: action.payload }},
    SET_API: (state, action) => { return { ...state, api: action.payload }}
  }
})

export const { SET_MEMBER, SET_APILIST, SET_API } = slice.actions;
export default configureStore({ reducer: slice.reducer });