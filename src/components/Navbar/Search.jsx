import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);
  const match = useMatch("/shop");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searched(input));
    if (!match) {
      navigate("/shop");
    }
  };
  return (
    <form className="bg-gray-300" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search product"
        className="border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Search;
