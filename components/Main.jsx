import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import About from "./About";

import Link from "next/link";
function Main() {
  return (
    <div className="w-full min-h-screen h-full text-center">
      <div className="w-full min-h-screen h-full m-auto p-2 flex justify-center items-center ">
        <div className="">
          <p className="mt-20 uppercase text-sm tracking-widest text-white">
            Lets get Creative
          </p>
          <h1 className="text-white">
            Hi ,I'm <span className="text-blue-300">Hari</span>
          </h1>
          <h2 className="text-white py-2">A Web Developer and An Artist</h2>
          <p className="py-4 text-white max-w-[70%] m-auto">
            I'm a Computer Science Student presently specializing in Web
            Development and pursue Art as a hobby. Currently foccused on
            building responsive front-end web applications while learning
            back-end technologies{" "}
          </p>

          <div className="flex items-center justify-between m-auto py-4 max-w-[330px]">
            <a
              href="https://www.linkedin.com/in/hari-charan-k-6b347a249/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/KHCharan13"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <Link href="/resume">
              <a>
                <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
