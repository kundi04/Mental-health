import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import therapy1 from "../assets/images/therapy1.png";
import therapy2 from "../assets/images/therapy2.png";
import therapy3 from "../assets/images/therapy3.png";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // One set of class content (including the row of 3 images) is shown per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const classes = [
    {
      title: "Body Scan",
      description: "This is a great space to update your audience with a description of your class.",
      videoDuration: "00:23",
      images: [therapy1, therapy2, therapy3], // Images in one row
    },
    {
      title: "Deep Sleep Session",
      description: "This is a great space to update your audience with a description of your class.",
      videoDuration: "00:29",
      images: [therapy1, therapy2, therapy3],
    },
    {
      title: "Loving Kindness",
      description: "This is a great space to update your audience with a description of your class.",
      videoDuration: "00:31",
      images: [therapy1, therapy2, therapy3],
    },
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Discover Our Online Classes</h2>
   
      <Slider {...settings}>
        {classes.map((item, index) => (
          <div className="carousel-item" key={index}>
            <div className="image-row">
              {item.images.map((image, imgIndex) => (
                <img
                  src={image}
                  alt={`${item.title} - Image ${imgIndex + 1}`}
                  className="video-thumbnail"
                  key={imgIndex}
                />
              ))}
            </div>
            <h3 className="class-title">{item.title}</h3>
            <p className="class-description">{item.description}</p>
          </div>
        ))}
      </Slider>
      <button className="start">Get Started</button>
    </div>
  );
};

export default Courses;
