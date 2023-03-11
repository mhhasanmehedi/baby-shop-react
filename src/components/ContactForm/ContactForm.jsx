import React from "react";

const ContactForm = () => {
  return (
    <div className=" flex-1">
      <form className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          className="border py-2 px-4 outline-none focus:border-pink-600 rounded-sm"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          className="border py-2 px-4 outline-none focus:border-pink-600 rounded-sm"
          placeholder="Your Email"
        />
        <input
          type="number"
          name="number"
          className="border py-2 px-4 outline-none focus:border-pink-600 rounded-sm"
          placeholder="Your Number"
        />

        <textarea
          name="message"
          className="border py-2 px-4 outline-none focus:border-pink-600 rounded-sm min-h-[150px]"
          placeholder="Your Message"
        ></textarea>

        <div className="flex justify-center">
          <button type="submit" className="py-2 px-3 bg-pink-700 hover:bg-pink-800 text-white ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
