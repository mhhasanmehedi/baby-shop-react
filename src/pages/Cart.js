import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "../components/Carts/EmptyCart";
import SingleCart from "../components/Carts/SingleCart";

const Cart = () => {
  document.title = "Cart - Baby Shop";
  const { cartItems } = useSelector((state) => state.carts);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h3 class="text-center text-3xl font-semibold mb-10">Cart</h3>
      <div className="max-w-4xl mx-auto">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex  items-center text-center bg-pink-700 text-white">
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
            <div className="flex justify-end flex-col items-end mt-10">
              <div className="flex font-bold">
                <h5 className="mr-[100px]">Subtotal </h5>
                <h5 className="">$ {totalPrice}</h5>
              </div>
              <p className="my-2">
                Shipping, taxes, and discounts will be calculated at checkout.
              </p>
              <Link
                to="/checkout"
                className="bg-pink-800 hover:bg-pink-900 text-white text-base py-2 px-4 rounded-full"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
