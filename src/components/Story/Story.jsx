import React from "react";
import bgImag from "@/assets/bg.png";
import Image from "next/image";
import story1 from "@/assets/story-1.png";
import story2 from "@/assets/story-2.png";
import story3 from "@/assets/story-3.png";
import story4 from "@/assets/story-4.png";
const Story = () => {
  return (
    <div
      className=" w-full h-full  bg-contain bg-center bg-no-repeat py-20 "
      style={{ backgroundImage: `url(${bgImag.src})` }}
    >
      <h1 className="text-5xl font-bold text-black text-center mb-16">
        Our Story
      </h1>
      <div className="wrapper px-4 sm:px-6  flex flex-col md:flex-row justify-between gap-12 ">
        {/* left content  */}
        <div className="bg-white rounded-2xl w-full md:w-1/2 relative">
          <div>
            <Image
              src={story1}
              alt="two baby picture"
              className="w-full object-cover rounded-tl-2xl rounded-tr-2xl "
            />
          </div>

          <div className=" ml-8 py-8 max-w-[430px]">
            <h1 className="font-bold text-black text-2xl leading-[33px]">
              A fun toddler coloring training on classroom
            </h1>
            <p className="text-[#666666] leading-[28px] text-justify mt-12">
              Beautiful branding for changes by Never Now in Australia. changes
              is a platform for open discussion in an inclusive and
              collaborative environment, providing the...
            </p>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[360px] ">
              <div className="bg-[#3CD8E8] w-max px-4 py-2 rounded-full text-white">
                November 19, 2019
              </div>
            </div>
          </div>
        </div>

        {/* right content  */}
        <div className="w-full md:w-1/2">
          <div className="rightContainer grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl w-full pb-7 relative">
              <Image
                src={story2}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[150px] ">
                <div className="bg-[#3CD8E8] w-max px-4 py-2 rounded-full text-white">
                  November 19, 2019
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl w-full pb-7 relative">
              <Image
                src={story1}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[150px] ">
                <div className="bg-[#95B226] w-max px-4 py-2 rounded-full text-white">
                  November 19, 2019
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl w-full pb-7 relative">
              <Image
                src={story3}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[150px] ">
                <div className="bg-[#36be86] w-max px-4 py-2 rounded-full text-white">
                  November 19, 2019
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl w-full pb-7 relative">
              <Image
                src={story4}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[150px] ">
                <div className="bg-Orange w-max px-4 py-2 rounded-full text-white">
                  November 19, 2019
                </div>
              </div>
            </div>
            <div className="block md:hidden bg-white rounded-2xl w-full pb-7">
              <Image
                src={story1}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
            </div>
            <div className="block md:hidden bg-white rounded-2xl w-full pb-7">
              <Image
                src={story2}
                alt="tow baby image"
                className="w-full rounded-tl-2xl rounded-tr-2xl"
              />
              <p className=" ml-9 mt-8 font-bold leading-[29px] max-w-[200px]">
                Find out if a school fits the family’s needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
