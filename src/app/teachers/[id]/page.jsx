import React from "react";
import teachers from "../../../../public/teachers.json";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import Button from "@/helper/button/Button";


const TeacherDetails = ({ params }) => {
  const teacher = teachers.find((t) => t.id === parseInt(params.id));

  if (!teacher)
    return <p className="text-center mt-10 text-red-500">Teacher not found</p>;

  return (
    <div className="wrapper px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      {/* Back Button */}

     <Button></Button>
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 shadow-lg rounded-xl">
        {/* Image */}
        <div className="w-full md:w-1/3 h-[300px] overflow-hidden rounded-lg">
          <Image
            src={teacher.photo}
            alt="profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="flex-grow space-y-2 text-gray-700">
          <h1 className="text-2xl font-bold text-black">{teacher.name}</h1>
          <p>
            <strong>Designation:</strong> {teacher.designation}
          </p>
          <p>
            <strong>Subject:</strong> {teacher.subject}
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-sky-500" /> {teacher.mobile}
          </p>
          <p className="flex items-center gap-2">
            <IoMailOpenOutline className="text-sky-500" /> {teacher.email}
          </p>
          <p>
            <strong>Address:</strong> {teacher.address}
          </p>
          <p>
            <strong>Office Room:</strong> {teacher.room}
          </p>
          <p>
            <strong>Experience:</strong> {teacher.experience}
          </p>
          <p>
            <strong>Joining Date:</strong> {teacher.joining_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
