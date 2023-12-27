import React from "react";
import img from "../assets/img/img7.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pt-20">
    <img className="p-s pt-20" src={img} alt="img" />

      <div className=" space-y-4 lg:pt-10 p-5">
        <h1 className=" font-semibold italic text-4xl text-center md:text-start pt-6 pb-4">
          Experience the Distinction
        </h1>
        <p>
          Our warm and inviting ambiance sets the stage for memorable moments
          with family and friends. Every corner of Heritage City echoes the
          spirit of togetherness, making it the perfect destination for
          celebrations, gatherings, or simply savoring a quiet meal in the
          embrace of tradition.
        </p>
        <p>
          Indulge your palate in a symphony of tastes, as our chefs blend modern
          creativity with age-old recipes, bringing you a dining experience that
          transcends time. Whether you're a connoisseur of traditional cuisine
          or an adventurous food explorer, our menu promises to tantalize your
          taste buds with a fusion of the finest ingredients and culinary
          expertise.
        </p>
        <p>
          Discover a world where the past meets the present, and every bite
          tells a story. Welcome to Heritage City – where heritage meets
          hospitality, and every meal is a journey through time.
        </p>

        <div className=" flex justify-center lg:justify-start pt-4">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
