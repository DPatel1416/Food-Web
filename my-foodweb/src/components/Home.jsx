import React from "react";
import Button from "../layouts/Button";

// Home component
const Home = () => {
  return (
    <div className="min-h-screen text-[#FFFFFF] flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      {/* Content container with text */}
      <div className="w-full lg:w-2/3 space-y-5">
        {/* Main headline */}
        <h1 className="text-backgroundColor font-semibold text-6xl">Heritage City</h1>

        {/* Subheadline */}
        <h1 className="text-backgroundColor font-semibold text-4xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>

        {/* Description */}
        <p className="text-backgroundColor">
          Welcome to Heritage City, where tradition meets taste. Immerse
          yourself in a culinary journey that blends timeless flavors with
          modern flair. Our chefs craft each dish with passion, offering a menu
          that celebrates heritage in every bite. Join us for an inviting dining
          experience, where the past and present converge, creating memorable
          moments with family and friends. Welcome to Heritage City – where
          every meal tells a story.
        </p>

        {/* "Order Now" button */}
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
