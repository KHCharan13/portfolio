import Image from "next/image";
import React from "react";
import weeblogImg from "../public/assets/projects/Weeblog.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../components/Navbar";

const weeblog = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={weeblogImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Weeblog</h2>
          <h3>Next JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A community Blog site where anyone can post a message like twitter
            and others can comment by using NextJS an application of React and
            FireBase for Authentication and Database service. Next JS was used
            as the framework whereas Tailwind CSS is used as the CSS framework
            for designing the website while using Firebase for Authentication as
            well as for Database
          </p>
          <a
            href="https://github.com/KHCharan13/fullstack_proj_react"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
              Code
            </button>
          </a>
          <a
            href="http://weeblog-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
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

export default weeblog;
