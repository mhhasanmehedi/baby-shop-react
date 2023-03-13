import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Profile
      </div>
      <form>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                className="block p-3 border outline-none w-full"
                id="firstName"
                name="firstName"
                value="Mehedi Hasan"
              />
            </div>
            <div>
              <label className="" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                className="block p-3 border outline-none w-full"
                id="lastName"
                name="lastName"
                value="Rahat"
              />
            </div>
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
                value="mehedihasan@gmail.com"
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
                value="+8801726630356"
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
              value="Vati Das Para,Dhanikhola Trishl, Mymensingh"
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
