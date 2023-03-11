import React from "react";
import { FaHeadset } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  document.title = "Contact - Baby Shop";
  return (
    <div className="my-10">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl font-semibold mb-10">Contact Us</h3>

        <div className="grid grid-cols-3 gap-9">
          <div className="border p-10 text-center group">
            <div className="bg-pink-700 text-white group-hover:bg-white group-hover:text-pink-700 group-hover:border transition h-16 w-16 m-auto flex items-center justify-center">
              <FaHeadset className="text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-gray-700 my-4">
              Talk to us
            </div>
            <a href="tel:+8802541415" className="block text-xl">
              +8801725554862
            </a>
            <a href="tel:+88021245854" className="block text-xl">
              +8801987146184
            </a>
          </div>
          <div className="border p-10 text-center group">
            <div className="bg-pink-700 text-white group-hover:bg-white group-hover:text-pink-700 group-hover:border transition h-16 w-16 m-auto flex items-center justify-center">
              <AiOutlineMail className="text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-gray-700 my-4">
              Send us an email
            </div>
            <a href="mailto:owner@gmail.com" className="block text-xl">
              owner@example.com
            </a>
            <a href="mailto:sales@example.com" className="block text-xl">
              sales@example.com
            </a>
          </div>
          <div className="border p-10 text-center group">
            <div className="bg-pink-700 text-white group-hover:bg-white group-hover:text-pink-700 group-hover:border transition h-16 w-16 m-auto flex items-center justify-center">
              <FaMapMarkedAlt className="text-2xl" />
            </div>
            <div className="text-2xl font-semibold text-gray-700 my-4">
              Come see us
            </div>
            <p className="text-xl">38 Saheb Ali Road, Sadar, Mymensingh</p>
          </div>
        </div>
        <div className="flex items-stretch mt-10 gap-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4092373717253!2d90.41808471447526!3d24.74715405588525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564fe59099c2c5%3A0xa0f70956c8835f2e!2sHello%20Baby!5e0!3m2!1sen!2sbd!4v1672635080426!5m2!1sen!2sbd"
            width="100%"
            className="border-0  flex-1"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
