import React from "react";
import img1 from "../Asset/23.webp";
import img2 from "../Asset/30.jpg";
import img3 from "../Asset/26.jpg";
import img4 from "../Asset/35.webp";
import img5 from "../Asset/28.webp";
import img6 from "../Asset/29.webp";
import img7 from "../Asset/30.webp";
import img8 from "../Asset/31.jpg";

export default function Gaurav() {
  let data = [
    {
      id: 1,
      img: img1,
      title: "Elaichi Kulhad Chai",
      card_text:
        "Fragrant and refreshing, this kulhad tea incorporates the essence of green cardamom & twist to the traditional chai.",
      buttonText: "Add to Cart",
      button: "Rs.30",
    },
    {
      id: 1,
      img: img2,
      title: "Saffron Kulhad Chai",
      card_text:
        "Rich and luxurious, this kulhad tea is flavored with saffron strands, enhancing the taste and giving it a royal touch.",
      buttonText: "Add to Cart",
      button: "Rs.50",
    },
    {
      id: 1,
      img: img3,
      title: "Browny Love Kulhad Chai",
      card_text:
        "Savor the heartwarming bliss of kulhad chai served with chocolate heart-shaped layer, combining love and flavor in every sip.",
      buttonText: "Add to Cart",
      button: "Rs.60",
    },
    {
      id: 1,
      img: img4,
      title: "Chocolate Kulhad Chai",
      card_text:
        "A decadent fusion of black tea and cocoa, delivering a heavenly blend of flavors for those with a sweet tooth.",
      buttonText: "Add to Cart",
      button: "Rs.50",
    },
    {
      id: 1,
      img: img5,
      title: "Adrak-Elaichi Kulhad Chai",
      card_text:
        "A soothing ginger-infused tea with a hint of sweetness, perfect for comforting and rejuvenating the senses.",
      buttonText: "Add to Cart",
      button: "Rs.40",
    },
    {
      id: 1,
      img: img6,
      title: "Oreo Kulhad Chai",
      card_text:
        "Indulge in the perfect blend of creamy Oreo goodness and aromatic kulhad chai, a delightful fusion that satisfies your soul.",
      buttonText: "Add to Cart",
      button: "Rs.70",
    },
    {
      id: 1,
      img: img7,
      title: "Masala Kulhad Chai",
      card_text:
        "A classic blend of black tea infused with aromatic Indian spices like cardamom, cinnamon, cloves, and ginger.",
      buttonText: "Add to Cart",
      button: "Rs.40",
    },
    {
      id: 1,
      img: img8,
      title: "Kashmiri Kulhad Chai",
      card_text:
        "A special tea blend from the Kashmir region, featuring green tea, saffron, almonds, and spices.",
      buttonText: "Add to Cart",
      button: "Rs.50",
    },
  ];
  return (
    <>
      <div className="india" id="ashu">
        <div>
          <h1 className="cup">KULHAD CHAI FLAVOURS</h1>
        </div>

        <div className=" row mt-(-4) mx-2">
          {data.length > 0
            ? data.map((carddetails) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-6">
                      <div className="card mt-4">
                        <img
                          src={carddetails.img}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{carddetails.title}</h5>
                          <p className="card-text">{carddetails.card_text}</p>
                          <a href="/" className="btn">
                            {carddetails.buttonText}
                          </a>
                          <button href="/" className="polo">
                            {carddetails.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
