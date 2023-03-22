import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const match = useMatch("/shop");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="border rounded-full flex items-stretch"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Search product"
        className="bg-transparent py-2 px-3 outline-none"
        value={search}
        onChange={(e) => {
          dispatch(searched(e.target.value));

          if (!match) {
            navigate("/shop");
          }
        }}
      />
      <button
        className="w-[42px] flex items-center justify-center rounded-full border !bg-gray-300 hover:!bg-pink-600 hover:text-white"
        type="submit"
      >
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
