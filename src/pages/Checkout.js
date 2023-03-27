import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  document.title = "Checkout - Baby Shop";

  const { cartItems } = useSelector((state) => state.carts);
  const { currentUser } = useSelector((state) => state.users);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: 0,
    address: "",
  });

  useEffect(() => {
    setFormData({
      name: currentUser.name ? currentUser.name : "",
      email: currentUser.email ? currentUser.email : "",
      mobile: currentUser.mobile ? currentUser.mobile : 0,
      address: currentUser.address ? currentUser.address : 0,
    });
  }, []);

  return (
    <div className="px-4 mx-auto py-10 container">
      <h3 class="text-center text-3xl font-semibold mb-10">Checkout</h3>
      <form>
        <div className="flex gap-10">
          <div className="flex-[7]">
            <h4 className="bg-gray-100 text-center text-xl font-medium mb-5 text-gray-800 p-2 ">
              Billing Details
            </h4>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                placeholder="Enter Your Full Name"
                className="border p-3 rounded-sm outline-none focus:border-pink-600"
              />
              <input
                type="number"
                name="number"
                value={formData.mobile}
                required
                placeholder="Enter Your Mobile Number"
                className="border p-3 rounded-sm outline-none focus:border-pink-600"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                placeholder="Enter Your Valid Email"
                className="border p-3 rounded-sm outline-none focus:border-pink-600"
              />
              <textarea
                name="message"
                required
                value={formData.address}
                placeholder="Enter Your Address"
                className="border p-3 rounded-sm outline-none focus:border-pink-600 min-h-[150px]"
              ></textarea>
            </div>
          </div>

          <div className="flex-[5]">
            <h4 className="bg-gray-100 text-center text-xl font-medium mb-5 text-gray-800 p-2 ">
              Order Summery
            </h4>
            <ul className="flex flex-col mb-3">
              <li className="flex justify-between items-center border-b border-dashed py-2">
                <span>Items Total </span>
                <span>$ {totalPrice}</span>
              </li>
              <li className="flex justify-between items-center border-b border-dashed py-2">
                <span>Delevery Fee</span>
                <span>$ 85</span>
              </li>
              <li className="flex justify-between items-center border-b border-dashed py-2">
                <span>Total Payment</span>
                <span>$ {totalPrice + 85}</span>
              </li>
              <li className="flex justify-between items-center border-b border-dashed py-2">
                <span>Total </span>
                <span>$ {totalPrice + 85}</span>
              </li>
            </ul>
            <button
              type="submit"
              className="bg-pink-800 hover:bg-pink-900 text-white text-base py-2 px-4 rounded-sm w-full"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
