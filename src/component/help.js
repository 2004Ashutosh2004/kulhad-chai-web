import React from "react";
import img46 from "../Asset/46.png";
import img47 from "../Asset/47.png";
import img48 from "../Asset/48.jpg";
import img49 from "../Asset/49.png";

export default function Help() {
  return (
    <>
      <div className="container">
        <div className="row mx-4">
          <div className="col-lg-6 col-sm-6 mt-4 my-2">
            <img src={img46} width="50px" alt="" />
            <span className="pikku">Our Address</span>
            <p className="thor">Church street ,Banglore 248569</p>
          </div>
          <div className="col-lg-6 col-sm-6 mt-4 my-2">
            <img src={img47} width="50px" alt="" />
            <span className="pikku">Call Us</span>
            <p className="thor">+91-9578354581</p>
          </div>
          <div className="col-lg-6 col-sm-6 mt-4 my-2">
            <img src={img48} width="50px" alt="" />
            <span className="pikku">Email Us</span>
            <p className="thor">kulhadchai@gmail.com</p>
          </div>
          <div className="col-lg-6 col-sm-6 mt-4 my-2">
            <img src={img49} width="50px" alt="" />
            <span className="pikku">Opening Hours</span>
            <p className="thor">Mon-Sat/11am-11pm</p>
          </div>
        </div>
      </div>
    </>
  );
}
