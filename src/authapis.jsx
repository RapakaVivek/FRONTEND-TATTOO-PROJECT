
import { useSelector } from "react-redux";
import { clearCart, setCart } from "./reduxapis";

import axios from "axios";
import { useEffect } from "react";



export const fetchCart = (serverlurl,user_id) => async (dispatch) => {
 
    console.log('servu',serverlurl,user_id)
    try {
        console.log('fetchcart')
      // Assuming the API endpoint is '/api/cart'
      const response = await axios.get(`${serverlurl}/cart/${user_id}`);
      dispatch(setCart(response.data.cart)); // Dispatch setCart with fetched data
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };



  export const incrementItemQuantity = (itemId,quantity,user_id,serverlurl) => async (dispatch, getState) => {
     // Replace with dynamic user_id if available
    console.log(itemId,quantity);
    
    try {
      const body = {
        user_id: user_id,
        designId: itemId,
        quantity: quantity++, // Increment quantity by 1
      };
  
      const response = await axios.post(`${serverlurl}/cart/update/cart`, body);
  
      // Assuming response.data.cart contains the updated cart
      dispatch(setCart(response.data.cart));
    } catch (error) {
      console.error("Error incrementing item quantity:", error);
    }
  };
  


  export const deleteItemFromCart = (itemId,user_id,serverlurl) => async (dispatch, getState) => {
   
    try {
      const body = {
        user_id: user_id,
        design_id: itemId,
      };
      console.log(body)

      // Sending data in the request body with DELETE method using `config.data`
      const response = await axios.delete(`${serverlurl}/cart/delete`, { data: body });
  
      // Assuming response.data.cart contains the updated cart
      dispatch(setCart(response.data.cart));
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };


  
  export const clearCartFromRedux = (user_id,serverlurl) => async (dispatch, getState) => {
      // Sending data in the request body with DELETE method using `config.data`
      const response = await axios.get(`${serverlurl}/cart/clear/${user_id}`)
      if(response.status == 200){
        console.log(response)
         dispatch(clearCart());
      }

      console.log(response)
      // dispatch(clearCart());
    } 
    
  