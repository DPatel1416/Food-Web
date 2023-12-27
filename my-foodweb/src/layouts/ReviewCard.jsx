import React from "react";

// ReviewCard component receives props for image, name, and review text
const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {/* Displaying the review text with light text color */}
      <div>
        <p className="text-lightText">
          {props.reviewText}
        </p>
      </div>

      {/* Displaying the reviewer's image and name in a flex container */}
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        {/* Displaying the reviewer's image with rounded corners and a specified width */}
        <img className="rounded-full w-1/4" src={props.img} alt="img" />

        {/* Displaying the reviewer's name with bold styling */}
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

// Export the ReviewCard component as the default export
export default ReviewCard;
