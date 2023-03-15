import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../features/auth/authAPI";

const SignUp = () => {
  const { isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        name,
        email,
        password,
      })
    );

    console.log("Hello");
  };

  return (
    <div className="w-[450px] p-10 m-auto my-20 shadow-lg">
      <h4 className="text-center mb-10 text-2xl uppercase tracking-[1px]">
        Sign Up
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="w-full border p-4 mb-4 outline-none focus:border-pink-700"
          placeholder="Full Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className="w-full border p-4 mb-4 outline-none focus:border-pink-700"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          className="w-full border p-4 mb-4 outline-none focus:border-pink-700"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <button
            disabled={isLoading}
            className="inline-block bg-pink-700 text-white px-4 py-2 uppercase tracking-widest hover:bg-pink-800"
          >
            {isLoading ? "Loading.." : "Sign Up"}
          </button>

          <p>
            <Link to="/sign_in" className="underline mt-3 block">
              Already have an account?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
