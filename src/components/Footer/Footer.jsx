import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import bikashImg from "../../assets/images/payment/bikash.png";
import masterCardImg from "../../assets/images/payment/mastercard.png";
import nagadImg from "../../assets/images/payment/nagad.png";
import roketImg from "../../assets/images/payment/roket.png";

import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4">
        <div className="py-10">
          <div className="flex">
            <div className="flex-[5]">
              <div className="mb-4 text-xl">Get In Touch</div>
              <Link to="/" className="bg-white inline-block">
                <img src={Logo} alt="Logo" className="h-10 w-10" />
              </Link>
              <div className="flex flex-col">
                <p>
                  38 Saheb Ali Road, Sadar, Mymensingh <br />
                  +8801485621765 <br />
                  email@gmail.com
                </p>
              </div>
              <div className="flex">
                <a
                  href="https://www.facebook.com"
                  className="transition hover:text-pink-700"
                  target="_blank"
                >
                  <AiOutlineFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="transition hover:text-pink-700"
                  target="_blank"
                >
                  <AiFillTwitterSquare />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="transition hover:text-pink-700"
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>

            <div className="flex-[3]">
              <div className="mb-4 text-xl">My Account</div>
              <div className="flex flex-col">
                <Link to="/" className="transition hover:text-pink-700">
                  Track my order
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Terms of use
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Wishlist
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Submit Your feedback
                </Link>
              </div>
            </div>
            <div className="flex-[3] ">
              <div className="mb-4 text-xl">Customer Service</div>
              <div className="flex flex-col">
                <Link to="/" className="transition hover:text-pink-700">
                  Help & Contact Us
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Returns & Refunds
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Online Stores
                </Link>
                <Link to="/" className="transition hover:text-pink-700">
                  Terms & Condition
                </Link>
              </div>
            </div>
            <div className="flex-[3] ">
              <div className="mb-4 text-xl">Usefull Links</div>
              <div className="flex flex-col">
                <Link to="/about" className="transition hover:text-pink-700">
                  About Us
                </Link>
                <Link to="/contact" className="transition hover:text-pink-700">
                  Contact Us
                </Link>
                <Link to="/blog" className="transition hover:text-pink-700">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3 border-t border-gray-800">
          <p>© 2022 Hello Baby</p>
          <div className="flex gap-x-2">
            <img src={bikashImg} alt="Bikash" />
            <img src={masterCardImg} alt="Mastercard" />
            <img src={nagadImg} alt="Nagad" />
            <img src={roketImg} alt="Roket" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
