import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { sortChanged, viewChanged } from "../../features/filter/filterSlice";

const TopFilter = () => {
  const { view, sortStatus } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        Paginate by
        <select name="paginateBy" id="paginateBy" className="ml-2 border">
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
      <div className="flex items-center">
        Default sorting
        <select
          name="sorting"
          id="sorting"
          className="ml-2 border"
          value={sortStatus}
          onChange={(e) => dispatch(sortChanged(e.target.value))}
        >
          <option value="">Default</option>
          <option value="low_to_high">Price (low to high)</option>
          <option value="high_to_low">Price (high to low)</option>
        </select>
      </div>

      <div className="flex">
        <button
          onClick={() => dispatch(viewChanged("grid"))}
          className={`${
            view === "grid"
              ? "bg-pink-700 text-white"
              : "bg-gray-200 p-3 text-pink-700"
          } p-3`}
        >
          <BsFillGrid3X3GapFill />
        </button>
        <button
          onClick={() => dispatch(viewChanged("list"))}
          className={`${
            view === "list"
              ? "bg-pink-700 text-white"
              : "bg-gray-200 p-3 text-pink-700"
          } p-3`}
        >
          <ImList />
        </button>
      </div>
    </div>
  );
};

export default TopFilter;
