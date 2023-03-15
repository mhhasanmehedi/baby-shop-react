import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { signIn, updateUser } from "../features/auth/authSlice";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser.name || "");
  const [email, setEmail] = useState(currentUser.email || "");
  const [mobile, setMobile] = useState(currentUser.mobile || "");
  const [address, setAddress] = useState(currentUser.address || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: currentUser.id,
        data: {
          name,
          email,
          mobile,
          address,
          password: currentUser.password,
        },
      })
    );

    dispatch(
      signIn({
        id: currentUser.id,
        name,
        email,
        mobile,
        address,
        password: currentUser.password,
      })
    );

    swal("Good job!", "Profile Update successfully!", "success");
  };

  return (
    <DashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Profile
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div>
            <label className="" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              className="block p-3 border outline-none w-full"
              id="fullName"
              name="fullName"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="block p-3 border outline-none w-full"
                id="email"
                name="email"
                value={email}
                readOnly
              />
            </div>
            <div>
              <label className="" htmlFor="number">
                Mobile
              </label>
              <input
                type="text"
                className="block p-3  border outline-none w-full"
                id="number"
                name="number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="" htmlFor="address">
              Your Address
            </label>

            <textarea
              className="block p-3 border min-h-[120px] outline-none w-full"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-pink-700 text-white p-3  uppercase tracking-[2px]">
            Save Changes
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default Profile;
