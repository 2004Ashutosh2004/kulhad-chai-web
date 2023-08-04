import React from "react";
import img100 from "../Asset/45.webp";
import { useState } from "react";

export default function Tabla() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Restro, setRestro] = useState("");
  const [location, setLocation] = useState("");
  const [flavor, setFlavor] = useState("");
  const [address, setAddress] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <div id="mob">
        <h2 className="sum">
          Take your <span className="ravi">Kulhad Chai</span> online with us
        </h2>
        <div className="container">
          <div className="row">
            {/* <div className='col-lg-5 gap-5'>
                    <input type='text' placeholder='Enter your Name' name='name'/>
                    <input type='email' placeholder='Enter your Email' name='email'/>
                    <input type='number' placeholder='Mobile Number' name='Mobile Number'/>
                    <input type='text' placeholder='Restro Name' name='Restaurent Name'/>
                    <input type='text' placeholder='Location' name='Location of the Restaurent'/>
                    <input type='message' placeholder='message' name='message'/>
                        </div> */}

            <div className="col-lg-6 col-12">
              <form
                className="jai w-90"
                onSubmit={() =>
                  localStorage.setItem(
                    "ContactFormDetails",
                    JSON.stringify([
                      {
                        name: name,
                        email: email,
                        Mobile: Mobile,
                        Restro: Restro,
                        location: location,
                        flavor: flavor,
                        address: address,
                        msg: msg,
                      },
                    ])
                  )
                }
              >
                <div className="pig row">
                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your Email"
                      name="email"
                      value={email}
                      onChange={(l) => setEmail(l.target.value)}
                    />
                  </div>

                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Mobile Number"
                      name="Mobile Number"
                      value={Mobile}
                      onChange={(m) => setMobile(m.target.value)}
                    />
                  </div>
                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Restaurant Name"
                      name="Restaurant Name"
                      value={Restro}
                      onChange={(o) => setRestro(o.target.value)}
                    />
                  </div>

                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Location"
                      name="Location of the Restaurent"
                      value={location}
                      onChange={(n) => setLocation(n.target.value)}
                    />
                  </div>
                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="List of flavours"
                      name="List of flavours"
                      value={flavor}
                      onChange={(r) => setFlavor(r.target.value)}
                    />
                  </div>
                  <div className="viru col-12 col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                      name="Address"
                      value={address}
                      onChange={(s) => setAddress(s.target.value)}
                    />
                    {/* <select className='city' type="text" placeholder='City' name='City'>
                                        <option value="India">India</option>
                                        <option value="Japan">Japan</option>
                                        <option value="America">America</option>
                                    </select> */}
                  </div>
                  <div className="vir col-12 col-md-6">
                    {/* <input className='form-control' type='text' placeholder='Location' name='Location of the Restaurent' /> */}
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="jaggu"
                      cols="60"
                      rows="5"
                      value={msg}
                      onChange={(g) => setMsg(g.target.value)}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <input
                      className="btns btn-primary"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-12">
              {/* <div className='pigi row'>
                                <div className='virc col-12 col-md-4'> */}
              <img src={img100} alt=" " className="img-fluid w-100 h-101" />
              {/* </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
