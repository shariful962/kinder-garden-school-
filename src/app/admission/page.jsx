import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SwiperTestimonials from "@/components/Admission/Testimonial";

const AdmissionPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-Skyblue">
          Enroll Your Child Today!
        </h1>
        <p className="text-lg text-gray-700">
          A joyful journey of learning and growing starts here.
        </p>
      </section>

      {/* Admission Steps */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          <li>Fill out the application form</li>
          <li>Attend a meeting with our admission team</li>
          <li>Submit required documents</li>
          <li>Receive confirmation & complete payment</li>
        </ol>
      </section>

      {/* Admission Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Admission Form</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Child's Name"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Parent/Guardian Name"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-2 rounded focus:outline-none"
          />
          <select className="border p-2 rounded">
            <option>Class Applying For</option>
            <option>Playgroup</option>
            <option>Nursery</option>
            <option>Kindergarten</option>
          </select>
          <textarea
            placeholder="Special Notes / Medical Info (optional)"
            className="border p-2 rounded col-span-full focus:outline-none"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="bg-Orange text-white col-span-full cursor-pointer py-3"
          >
            Submit Application
          </button>
        </form>
      </section>
      {/* FAQs  */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='hover:no-underline cursor-pointer'> <h3 className="font-semibold">What is the minimum age for admission?</h3></AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">Children must be at least 3 years old by August 1, 2025.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='hover:no-underline cursor-pointer'><h3 className="font-semibold">Is there an admission test or interview?</h3></AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">There is a short interaction session with both parents and child.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='hover:no-underline cursor-pointer'><h3 className="font-semibold">Do you offer daycare facilities?</h3></AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">Yes, we offer after-school daycare till 5:00 PM.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">What Parents Say</h2>
        <SwiperTestimonials></SwiperTestimonials>
      </section>

      {/* Contact Info */}
      <div className="flex items-center justify-center">
        <section className="text-gray-700 space-y-3">
          <h2 className="text-xl font-semibold mb-2 text-center">Need Help?</h2>
          <p className="flex items-center gap-x-2">
            <MdOutlinePhone size={24} /> <span>+880-1234-567890</span>
          </p>
          <p className="flex items-center gap-x-2">
            <CiMail size={24} /> kidschool@example.com
          </p>
          <p className="flex items-center gap-x-2">
            <SlLocationPin size={24} /> 123 Kids Street, Dhaka
          </p>
        </section>
      </div>
    </div>
  );
};
export default AdmissionPage;
