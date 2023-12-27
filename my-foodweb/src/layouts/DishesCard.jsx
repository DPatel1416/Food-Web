import React from "react";
import Button from "../layouts/Button";

// DishesCard component receives props for image, title, and price
const DishesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      {/* Displaying the dish image with rounded corners */}
      <img className="rounded-xl" src={props.img} alt="img" />

      <div className="space-y-4">
        {/* Displaying the dish title with bold styling */}
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>

        {/* Displaying an "Explore" button */}
        <div className="flex flex-row items-center justify-center gap-4">
          {/* Using the Button component with the title "Explore" */}
          <Button title="Explore" />
        </div>
      </div>
    </div>
  );
};

// Export the DishesCard component as the default export
export default DishesCard;
