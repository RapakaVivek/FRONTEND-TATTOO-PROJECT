import { configureStore, createReducer, createSlice } from '@reduxjs/toolkit';
import cartReducer from '../reduxapis'
// const initialState = JSON.parse(localStorage.getItem("cart")) || [];


const initialUserState = {
  _id: "",
  name: "",
  email: "",
  token: "",
  phonenumber:"",
};




const userslice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
      setuser: (state, action) => {
          state._id = action.payload._id;
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.phonenumber=action.payload.phonenumber;  
      },
      settoken: (state, action) => {
          state.token = action.payload;
      }
      // ,
      // setcart: (state, action) => {
      //     state.cart = action.payload.token;
      // },
  },
});

export const {setuser , settoken ,setcart} = userslice.actions




const serverurlslice = createSlice({
  name:'serverurl',
  initialState:{
      url:'https://tattoosbackend-3.onrender.com'
  },
  reducers:{
      setserverurl:(state,action)=>{
          state.url=action.payload;
      },
  },
});


export const {setserverurl} = serverurlslice.actions;
export const serverurlreducer = serverurlslice.reducer;




const store = configureStore({
  reducer: {
    carts: cartReducer,
    users: userslice.reducer,
    serverurl: serverurlreducer, 
  },
});






export default store;





