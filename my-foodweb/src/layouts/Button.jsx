import React from "react";

// Button component receives props, including the title for the button
const Button = (props) => {
  return (
    <div>
      {/* Button with Tailwind CSS classes for styling */}
      <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {/* Display the title of the button provided through props */}
        {props.title}
      </button>
    </div>
  );
};

// Export the Button component as the default export
export default Button;
