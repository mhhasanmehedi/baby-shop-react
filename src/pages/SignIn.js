import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { signIn } from "../features/auth/authSlice";

const SignIn = () => {
  const { users, currentUser, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchUser = users.find((user) => {
      if (user.email === email && user.password === password) {
        return user;
      }
    });

    matchUser ? dispatch(signIn(matchUser)) : alert("User Not Found");

    setEmail("");
    setPassword("");

    swal("Good job!", "You Logged In successfully!", "success");
  };

  return (
    <div className="w-[450px] p-10 m-auto my-20 shadow-lg">
      <h4 className="text-center mb-10 text-2xl uppercase tracking-[1px]">
        Sign In
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-4 mb-4 outline-none focus:border-pink-700"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-4 mb-4 outline-none focus:border-pink-700"
          placeholder="Password"
        />
        <div className="text-center">
          <button
            disabled={isLoading}
            className="inline-block bg-pink-700 text-white px-4 py-2 uppercase tracking-widest hover:bg-pink-800"
          >
            {isLoading ? "Loading.." : "Sign In"}
          </button>

          <p>
            <Link to="/sign_up" className="underline mt-3 block">
              Don't have any account?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
