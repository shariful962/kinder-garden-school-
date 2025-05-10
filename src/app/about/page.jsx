import React from "react";
import { GoGoal } from "react-icons/go";
import { GrView } from "react-icons/gr";

const AboutPage = () => {
  return (
    <div className="wrapper px-4 sm:px-6 ">
      <h1 className="text-3xl font-semibold text-center my-8">
        Come Explore Our School Family
      </h1>
      <p className="font-medium leading-[29px] text-lg text-justify">
        Welcome to <strong>Little Stars School</strong>, a joyful place where
        young minds begin their journey of discovery, learning, and growth. At
        our school, we believe every child is unique and full of potential. Our
        mission is to create a safe, caring, and fun environment where children
        feel loved, valued, and inspired to explore the world around them. With
        passionate teachers, playful activities, and a strong foundation in
        early education, we help kids grow with confidence, creativity, and
        curiosity. Here, every day is a new adventure — filled with laughter,
        learning, and lots of love!
      </p>
      {/* Mission and Vision Cards */}

      <h1 className="text-3xl font-semibold text-center my-8">
        Mission and Vision{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center ">
          <GoGoal size={48} className="mb-4 text-[#FF00FF] inline-block" />
          <h3 className="text-2xl font-semibold text-[#3CD8E8] mb-4">
            {" "}
            Our Mission
          </h3>
          <p className="text-[#555] leading-relaxed">
            Our mission is to inspire young minds through love, learning, and
            laughter. We provide a nurturing environment where children grow
            through play-based learning.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <GrView size={48} className="text-Orange mb-4 inline-block" />
          <h3 className="text-2xl font-semibold text-[#95B226] mb-4">
            {" "}
            Our Vision
          </h3>
          <p className="text-[#555] leading-relaxed">
            To be a leading preschool that cultivates creativity, confidence,
            and curiosity— empowering children to become compassionate and
            capable individuals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
