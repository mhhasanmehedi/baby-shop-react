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
    <form className="bg-gray-300" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search product"
        className="border"
        value={search}
        onChange={(e) => {
          dispatch(searched(e.target.value));

          if (!match) {
            navigate("/shop");
          }
        }}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
