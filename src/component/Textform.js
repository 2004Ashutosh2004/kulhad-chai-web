import React from "react";

export default function Textform() {
  return (
    <>
      <div className="container home-banner-text">
      <div className="row">
      <div className="col-12">
        <div className="Vismay mb-2">
          <h5>Hi! Welcome to Kulhad Chai</h5>
        </div>
        <div className=",mt-3">
          <span className="spandan">Chai, Mausam or Dost</span>
        </div>
        <div>
          <h5>Drink Kulhad tea on the pretext of getting</h5>
        </div>
        <div>
          <h5>a chance to kiss the soil of your country...............</h5>
        </div>
        <div>
          <button
            type="button"
            class="sagar"
            data-bs-toggle="button"
            autocomplete="off"
          >
            View Flavours
          </button>
          <button
            type="button"
            class="sagar"
            data-bs-toggle="button"
            autocomplete="off"
          >
            Order your Chai
          </button>
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
      </div>
    </>
  );
}
