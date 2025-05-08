import React from 'react';
import Image from 'next/image'; 
import heroImg from "@/assets/hero-kids.png"

const Banner = () => {
    return (
        <div className='wrapper px-4 sm:px-6 my-12 '>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            {/* text content  */}
            <div className='w-full md:w-1/2'>
                <h1 className='text-[3.5rem] text-black leading-[61px]'> <span className='text-Orange'>Empowering</span> <br className='hidden md:block' />students from small age <span className='text-Skyblue'>towards vision</span></h1>
                <p className='text-xl text-black my-6'>With the courage, Confidence,  Creativity and Compassion to make their Unique Contribution in a Diverse and Dynamic World.</p>

                <button className="px-8 py-3 rounded-xl bg-black text-white text-xl font-semibold cursor-pointer">Enroll Now</button>
            </div>
            {/* image content  */}
            <div>
                <Image src={heroImg} alt='hero image ' className='w-fit' />
            </div>
            </div>
        </div>
    );
};

export default Banner;