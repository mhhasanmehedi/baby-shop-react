import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { fetchUsers } from "./features/auth/authSlice";
import About from "./pages/About";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import AllCategory from "./pages/AllCategory";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Shop from "./pages/Shop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const { currentUser, users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Dashboard />} path="/dashboard" />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="/admin/add_product" element={<AddProduct />} />
        <Route
          path={`/admin/edit_product/:productId`}
          element={<EditProduct />}
        />
        <Route path="/admin/all_product" element={<AllProduct />} />
        <Route path="/admin/add_category" element={<AddCategory />} />
        <Route path="/admin/all_category" element={<AllCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
