import Image from "next/image";
import React from "react";
import appointmentImg from "../public/assets/projects/appointment.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../components/Navbar";

const appointment = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={appointmentImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Appontment Booking Website</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using HTML and is styled with CSS with
            the help of JavaScript for animation and for other things. The
            application is hosted statically using Vercel. This is a mobile
            responsive website for a GYM and also has the feature of booking
            appointments. Users may book appointment with the client for
            differnt classes provided by the Gym.It uses Koolender for booking
            appointment which will automatically send the mail and set a meeting
            in your calender based on your appointment date and time
          </p>
          <a
            href="http://appointment-bookiniwebsite.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 m-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/KHCharan13/Appointment_booking_website"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 m-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Koolender
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default appointment;
