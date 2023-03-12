import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../components/Carts/EmptyCart";
import SingleCart from "../components/Carts/SingleCart";

const Cart = () => {
  document.title = "Cart - Baby Shop";
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.carts);

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="px-4">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div className="flex  items-center text-center  max-w-4xl mx-auto bg-pink-700 text-white">
                <div className="flex-[1] py-3">SL</div>
                <div className="flex-[2] py-3">Image</div>
                <div className="flex-[7] py-3">Product</div>
                <div className="flex-[3] py-3">Unit Price</div>
                <div className="flex-[4] py-3">Quantity</div>
                <div className="flex-[3] py-3">Total</div>
              </div>

              {cartItems.map((cart, index) => (
                <SingleCart cart={cart} index={index} key={cart.id} />
              ))}
            </>
          )}
        </div>

        {/* {cartItems.length === 0
          ? "Your Carts Is Empty"
          : } */}
      </div>
    </div>
  );
};

export default Cart;
