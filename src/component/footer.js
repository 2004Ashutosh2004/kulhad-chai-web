import React from "react";
import img50 from "../Asset/50.png";
import img51 from "../Asset/51.png";
import img52 from "../Asset/52.png";
import img53 from "../Asset/53.png";
import img54 from "../Asset/54.png";
import img55 from "../Asset/55.png";
import img56 from "../Asset/56.png";

export default function Footer() {
  return (
    <>
      <footer className="tan" id="con">
        <div className="container aman">
          <div className="row mx-4">
            <div className="col-lg-3 col-sm-6 mt-4 my-2">
              <img src={img50} className="kedar" width="30px" alt="" />
              <span className="bru">Address</span>
              <p className="iron">Church street ,Banglore 248569</p>
            </div>
            <div className="col-lg-3 col-sm-6 mt-4 my-2">
              <img src={img51} className="kedar" width="30px" alt="" />
              <span className="bru">Reservations</span>
              <p className="iron">+91-9578354581</p>
              <p className="irony">kulhadchai@gmail.com</p>
            </div>
            <div className="col-lg-3 col-sm-6 mt-4 my-2">
              <img
                src={img52}
                className="kedar"
                width="31px"
                height="27px"
                alt=""
              />
              <span className="bru">Opening Hours</span>
              <p className="iron">Mon-Sat/11am-11pm</p>
            </div>
            <div className="col-lg-3 col-sm-6 mt-4 my-2">
              <p className="bru">Follow Us</p>
              <div className="pet">
                <img src={img53} className="bet mx-2" width="30px" alt="" />
                <img src={img54} className="bet mx-2" width="30px" alt="" />
                <img src={img55} className="bet mx-2" width="30px" alt="" />
                <img src={img56} className="bet mx-2" width="30px" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            background: "white",
            color: "white",
            borderColor: "white",
            height: "1px",
            width: "100%",
          }}
        />
        <p className="van mb-0">
          @copyright - KhulhadChai. All Rights Reserved
        </p>
        <p className="van mb-0">-Designed by Ashutosh Panwar</p>
      </footer>
    </>
  );
}
