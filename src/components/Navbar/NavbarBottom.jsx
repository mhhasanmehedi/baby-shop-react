import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { MdCall, MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import { categorySelected } from "../../features/filter/filterSlice";

const NavbarBottom = () => {
  const { categories, isError } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="py-4 pr-5 uppercase font-semibold text-gray-800"
            >
              Home
            </Link>
            <div className="group relative py-4 pr-5">
              <div className="flex items-center uppercase font-semibold text-gray-800">
                Category
                <BiChevronDown className="transition group-hover:rotate-180" />
              </div>
              <div className="group-hover:visible group-hover:opacity-100 transition delay-200 absolute top-full invisible opacity-0 z-50 bg-slate-600 p-5">
                {!isError &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <Link
                      to="/shop"
                      key={category.id}
                      onClick={() => dispatch(categorySelected(category.title))}
                      className="block w-full"
                    >
                      {category.title}
                    </Link>
                  ))}
              </div>
            </div>
            <Link
              to="/about"
              className="py-4 pr-5 uppercase font-semibold text-gray-800"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="py-4 pr-5 uppercase font-semibold text-gray-800"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:01855421692" className="flex items-center">
              <MdCall />
              01855421692
            </a>
            <a href="mail:support@gmail.com" className="flex items-center">
              <MdEmail />
              support@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
