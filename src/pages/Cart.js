import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCarts } from "../features/carts/cartsSlice";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  

  return <div>Cart</div>;
};

export default Cart;
