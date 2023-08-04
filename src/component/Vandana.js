import React from "react";
import image61 from "../Asset/61.png";
import { useState } from "react";
import video from "../Asset/64.mp4";
import video1 from "../Asset/65.mp4";
import video2 from "../Asset/66.mp4";
import video3 from "../Asset/67.mp4";
import video4 from "../Asset/68.mp4";

export default function Vandana() {
  // const [vid,setVid] = useState(null)

  // const handleChange = (event) => {
  //     setVid(URL.createObjectURL(event.target.files[0]))
  // }
  return (
    <>
      {/* <input type="file" onChange={handleChange}/> */}
    {/* <iframe src={vid}></iframe> */}
    <h1 className="cap">
           <span className="rom">G</span>
           aller
           <span className="rom">y</span>
        </h1>
    <div className="conatiner">
      <video className="pix" loop autoPlay controls muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <video className="pix" loop autoPlay controls muted>
        <source src={video1} type="video/mp4"></source>
      </video>
      <video className="pix" loop autoPlay controls muted>
        <source src={video2} type="video/mp4"></source>
      </video>
      <video className="pix" loop autoPlay controls muted>
        <source src={video3} type="video/mp4"></source>
      </video>
      <video className="pix" loop autoPlay controls muted>
        <source src={video4} type="video/mp4"></source>
      </video>
    </div>
      <div>
        <h1 className="cap" id="lax">
          About <span className="rom">Us</span>
        </h1>
      </div>
      <div className="row ink">
        <div className="col-lg-5 col-12 ">
          <div className="sag">
            <img alt="" src={image61}/>
          </div>
        </div>
        <div className="col-lg-7 col-12 ram">
          <div className="cont">
            <div className="visu">
              <h2>
                <b>Kulhad Chai</b>
              </h2>
            </div>
            <div className="spandy">
              <p>
                kulhad Chai is a online platform which has potential to sell
                your chai online. Kulhad chai, a traditional Indian delight, is
                a fragrant and flavorful tea served in earthy clay cups. Its
                rustic charm adds an authentic touch to the tea-drinking
                experience. Sipping on this hot beverage from a kulhad enhances
                the taste and leaves a unique aftertaste, making it a favorite
                among tea enthusiasts. The clay material retains heat, keeping
                the chai warm for longer, and also contributes to sustainable
                and eco-friendly practices. Whether enjoyed at roadside stalls
                or in upscale cafes, kulhad chai offers a delightful cultural
                journey through India's rich tea heritage.
              </p>
            </div>
            <div className="candy">
              <h5>Why to choose our Kulhad Chai?</h5>
              <li>Earthy Flavor</li>
              <li>Sustainable Packaging</li>
              <li>Temperature Retention</li>
              <li>Cultural Connection</li>
            </div>
            <div className="Apple">
              <p>
                Experience the rich cultural heritage of India with every sip of
                authentic kulhad chai, served in earthy clay cups, offering an
                unparalleled aroma and warmth that captivates the senses and
                leaves you craving for more.Sip the nostalgic charm of kulhad
                chai, a beloved Indian tradition, and immerse yourself in the
                rich flavors that transport you to a time-honored tea
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card" style={{width:"18rem"}}>
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a> 
      </div>
    </div> */}
    </>
  );
}
