import React from "react";
import { GoGoal } from "react-icons/go";
import { GrView } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi"
import { FaPalette,FaShieldAlt  } from "react-icons/fa";
import Teachers from "@/components/Teachers/Teachers";



const AboutPage = () => {
  return (
    <div className="wrapper px-4 sm:px-6 pb-12">
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

     {/* why choose us Section   */}
       
      <h3 className="text-3xl font-bold text-center text-black mb-10">Why Choose Us</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <div className="text-5xl mb-4 inline-block"><GiTeacher size={48} className="text-Skyblue" /></div>
      <h4 className="text-xl font-semibold mb-2">Experienced Teachers</h4>
      <p className="text-[#555] text-sm leading-relaxed">
        Our caring and trained teachers ensure every child gets personalized attention and support.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <div className="text-5xl mb-4 inline-block"><FaPalette size={48} className="text-Orange"/></div>
      <h4 className="text-xl font-semibold mb-2">Fun Learning Activities</h4>
      <p className="text-[#555] text-sm leading-relaxed">
        We blend play and learning with storytelling, art, music, and movement.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
      <div className="text-5xl mb-4 inline-block"><FaShieldAlt size={48} className="text-Skyblue" /></div>
      <h4 className="text-xl font-semibold mb-2">Safe & Nurturing Environment</h4>
      <p className="text-[#555] text-sm leading-relaxed">
        Your child's safety and emotional well-being is our top priority, always.
      </p>
    </div>
  </div>

  {/* Teachers  Section  */}
  <h3 className="text-3xl font-bold text-center text-black my-16">Meet Our Teacher</h3>
    <Teachers></Teachers>
    
    </div>
  );
};

export default AboutPage;
