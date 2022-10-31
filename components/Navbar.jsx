import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navMenu = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-4">
        <div className="ml-4">
          <Link href={"/"}>
            <Image
              src="/../public/assets/hc.png"
              alt="Logo"
              width="65"
              height="65"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:font-bold">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:font-bold">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:font-bold">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={navMenu} className="mr-3 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <Image
                src="/../public/assets/hc.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </div>
            <div
              onClick={navMenu}
              className={
                nav
                  ? "p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 ease-in duration-150"
                  : " hidden"
              }
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="font-semibold text-gray-600 border-b-2 border-purple-400 my-5">
            <p className="text-lg w-[85%] md:w-[90%] py-4">
              Let's have fun and create something incredible
            </p>
          </div>
          <div>
            <ul className="uppercase font-bold">
              <Link href="/">
                <li className="py-4 text-md hover:translate-x-2 ease-in duration-300">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-md hover:translate-x-2 ease-in duration-300">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-md hover:translate-x-2 ease-in duration-300">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-md hover:translate-x-2 ease-in duration-300">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-md hover:translate-x-2 ease-in duration-300">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-purple-600">
                Find me at
              </p>
              <div className="flex items-centre justify-between my-4 sm:w-[85%]">
                <a
                  href="https://www.linkedin.com/in/hari-charan-k-6b347a249/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/KHCharan13"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>

                <a
                  href="https://drive.google.com/file/d/1N-1uTp-NqNXr9KRmsQrGo99s4J1NIVUs/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg bg-white shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
