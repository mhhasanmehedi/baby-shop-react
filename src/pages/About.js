import React from "react";

const About = () => {
  document.title = "About - Baby Shop";
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h3 className="text-center text-3xl font-semibold">About Hello Baby</h3>
        <div className="grid grid-cols-2 gap-14 my-8">
          <div className="col-lg-6">
            <div className="aboutImg">
              <img
                src="https://images.unsplash.com/photo-1511733897353-5b04f82435a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="About Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutContent">
              <p>
                Welcome to our baby shop! We are a family-owned business
                dedicated to providing high-quality products for babies and
                young children. Our store is filled with a wide selection of
                items, including clothes, toys, gear, and accessories. We
                understand the importance of finding safe, durable, and
                comfortable products for your little ones. That's why we
                carefully select each and every item we carry, ensuring that it
                meets our strict standards for quality and safety.
                <br />
                <br />
                In addition to our wide selection of products, we also offer
                exceptional customer service. Our team is always ready to answer
                your questions and help you find the perfect products for your
                little ones. <br />
                <br />
                Thank you for choosing our baby shop. We look forward to helping
                you find everything you need for your little ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
