// import Image from 'next/image';
// import React from 'react';
// import { FaPhone } from "react-icons/fa";
// import { IoMailOpenOutline } from "react-icons/io5";



// const SingleTeacher = ({teacher}) => {
//     const {id,name,designation, subject, photo,mobile,email } = teacher
//     return (
//         <div>
//             <div className='teacherContainer bg-white rounded-2xl shadow-lg p-6 flex gap-12'>
//                 <div>
//                     <Image src={teacher.photo} alt='profile' width={200 } height={200} priority  className=' inline-block w-full object-cover'/>
//                 </div>
//                 <div>
//                     <h1>{name}</h1>
//                     <h1>{designation}</h1>
//                     <p className='flex gap-x-4 items-center'> <FaPhone size={22} className='text-Skyblue'/> <span>{mobile}</span></p>
//                     <p className='flex gap-x-4 items-center'> <IoMailOpenOutline size={22} className='text-Skyblue'/> <span>{email}</span></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleTeacher;


import Image from 'next/image';
import React from 'react';
import { FaPhone } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const SingleTeacher = ({ teacher }) => {
  const { id, name, designation, subject, photo, mobile, email } = teacher;

  return (
    <div>
      <div className="teacherContainer bg-white rounded-2xl shadow-lg px-6  py-12 flex items-center gap-8 relative h-max">
        {/* Image Wrapper */}
        <div className="w-[100px] h-[100px] rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={photo}
            alt="profile"
            width={200}
            height={200}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Info Section */}
        <div className="text-left mb-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="text-md text-gray-600 mb-2">{designation}</h2>
          <p className="flex gap-x-2 items-center ">
            <FaPhone size={18} className="text-sky-500" />
            <span>{mobile}</span>
          </p>
          <p className="flex gap-x-3 items-center">
            <IoMailOpenOutline size={20} className="text-sky-500" />
            <span className="truncate max-w-[200px]">{email}</span>
          </p>
        </div>
        <div className='absolute bottom-0 right-3 mb-4'>
            <button className='bg-Orange text-white px-5 py-2 cursor-pointer rounded-md'>view profile</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
