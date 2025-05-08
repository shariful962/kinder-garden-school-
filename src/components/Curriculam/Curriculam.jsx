import Image from 'next/image';
import React from 'react';
import kinder from "@/assets/kinder.png"
import elementary from "@/assets/elementary.png"
import middle from "@/assets/middle.png"

const Curriculam = () => {
    return (
        <div className=" w-full h-full  bg-cover bg-center bg-no-repeat my-20"
        style={{ backgroundImage: "url('../../assets/kinder.png')" }}>
            <h1 className='text-5xl font-bold text-black text-center mb-16'>Standard Curriculum</h1>
            <div className='wrapper px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12'>
                <div className="[box-shadow:inset_0_0_28.3px_0.94px_rgba(0,0,0,0.05)] bg-gradient-to-t from-[#FFFFFF] to-[#DEF5FF] py-12 text-center space-y-8 rounded-2xl [border:1px_solid_rgb(222,245,255)]">
                    <Image src={kinder} alt='banna and bread picture ' className='inline-block' />
                   <h1 className='font-bold text-2xl text-black'>Kinder (3-6) Years</h1>
                   <p className='font-medium leading-[24px]'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient</p>
                   <button className='font-bold text-[#64C8FF] cursor-pointer'>Read More</button>
                </div>
                <div className="[box-shadow:inset_0_0_28.3px_0.94px_rgba(0,0,0,0.05)] bg-gradient-to-t from-[#FFFFFF] to-[#FFF4DC] py-12 text-center space-y-8 rounded-2xl [border:1px_solid_rgb(255,244,220)]">
                    <Image src={elementary} alt='banna and bread picture ' className='inline-block' />
                   <h1 className='font-bold text-2xl text-black'>Elementary School</h1>
                   <p className='font-medium leading-[24px]'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient</p>
                   <button className='font-bold text-[#F0AA00] cursor-pointer'>Read More</button>
                </div>

                <div className="[box-shadow:inset_0_0_28.3px_0.94px_rgba(0,0,0,0.05)] bg-gradient-to-t from-[#FFFFFF] to-[#F2E8FF] py-12 text-center space-y-8 rounded-2xl [border:1px_solid_rgb(242,232,255)]">
                    <Image src={middle} alt='banna and bread picture ' className='inline-block' />
                   <h1 className='font-bold text-2xl text-black'>Middle (10-16) Years</h1>
                   <p className='font-medium leading-[24px]'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient</p>
                   <button className='font-bold text-[#8700FF] cursor-pointer'>Read More</button>
                </div>
                
            </div>
        </div>
    );
};

export default Curriculam;