import Image from "next/image";
import React from "react";
import personalisedappImg from "../public/assets/projects/appimg.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Navbar from "../components/Navbar";

const personalisedapp = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={personalisedappImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Personalised Library Android App</h2>
          <h3>Java/ Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            An App which allows the user to know of the books wanted by the user
            are available in the library with all the details such as the no of
            copies,location and if they are not available then a soft copy link
            is available. This could help the students locate the books in the
            library faster. Also It can help students during exams when books
            are short by providing the Softcopy URL
          </p>
          <a
            href="https://github.com/fireclint/personalisedapp-react-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java
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

export default personalisedapp;
