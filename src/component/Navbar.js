import {React,useEffect,useState} from "react";
import image from "../Asset/4.png";
import image1 from "../Asset/9.png";
import imagea from "../Asset/15.png";

export default function Textform() {
    const [scroll,setScroll]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            setScroll(window.scrollY>50);
        })
    }
    )
  
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={image}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top navbar-logo"
            />
            <h className="Navtext">
              <b>Kulhad Chai</b>
            </h>
          </a>
        </div>
      </nav> 
      <nav className={scroll?"navbar fixed-topbar navbar-expand-lg navbar-light bg-light":"navbar navbar-expand-lg navbar-light bg-light"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={image1}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top navbar-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#lax">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#ashu">
                  Flavours
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#eve">
                  Restaurants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#onl">
                  location
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#mob">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#con">
                  Contact Us
                </a>
              </li>
            </ul>
            <a className="pee" href="/">
              <img className="Dee" src={imagea} alt="" />
            </a>
            <span className="ap">Cart</span>
            <form className="d-flex">
              <button className="btna btn-outline-success" type="submit">
                Order Now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
