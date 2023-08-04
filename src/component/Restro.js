import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img4 from "../Asset/34.jpg";
import img5 from "../Asset/36.jpg";
import img6 from "../Asset/37.jpg";
import img7 from "../Asset/38.jpg";
import img8 from "../Asset/39.webp";
import img9 from "../Asset/40.png";
import img10 from "../Asset/41.jpg";
import img11 from "../Asset/42.jpg";
import img12 from "../Asset/43.webp";
import img13 from "../Asset/44.jpeg";

export default function Restro() {
  let data = [
    {
      id: 1,
      img: img4,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img5,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img6,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img7,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img8,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img9,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img10,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img11,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img12,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
    {
      id: 1,
      img: img13,
      title: "Card title",
      card_text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      buttonText: "Add to Cart",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container-fluid" id="eve">
      <div className="Api">
        <h5>Event</h5>
        <h3>
          Share your <span className="bitu">Kulhad Chai Moments</span> in our
          Platform
        </h3>
      </div>
      <div className="row">
        <Carousel
          autoPlay={true}
          infinite={true}
          dotListClass="custom-dot-list-style"
          autoPlaySpeed={2000}
          transitionDuration={1500}
          responsive={responsive}
        >
          {data.length > 0
            ? data.map((carddetails) => {
                return (
                  <>
                    <div className="mx-2">
                      <div className="card mt-4">
                        <img
                          src={carddetails.img}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                    </div>
                  </>
                );
              })
            : ""}
          {/* <div className="mx-2">
                        <div className="">
                            <img src={img4} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img5} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img6} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img7} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img8} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img9} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img10} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img11} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img12} className="card-img-top" alt="..." />
                    </div>
                    </div>
                    <div className="mx-2"><div className="">
                        <img src={img13} className="card-img-top" alt="..." />
                    </div>
                    </div> */}
        </Carousel>
      </div>
    </div>
  );
}
