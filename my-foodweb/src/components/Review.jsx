import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

// Review component
const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-10 px-4">
      {/* Title for the review section */}
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-8 pb-10">
        Customer's Review
      </h1>

      {/* Displaying ReviewCard components with customer reviews */}
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          reviewText="Heritage City is a culinary gem where tradition and innovation collide, delivering a dining experience that truly captivates the senses."
          img={img1}
          name="Sophia Azura"
        />
        <ReviewCard
          reviewText=" Exceptional flavors and a perfect blend of heritage make Heritage City a must-visit destination for anyone seeking a remarkable journey through delectable cuisines."
          img={img2}
          name="John Deo"
        />
        <ReviewCard
          reviewText=" Heritage City surpassed all expectations, each dish tells a unique story of rich tradition and exquisite taste, leaving an indelible mark on the palate."
          img={img3}
          name="Victoria Zoe"
        />
      </div>
    </div>
  );
};

// Export the Review component as the default export
export default Review;
