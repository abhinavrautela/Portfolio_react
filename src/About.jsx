import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsFacebook,
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { DiCss3, DiHtml5, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TbArrowWaveRightDown } from "react-icons/tb";
import Card from "./Card";

const About = () => {
  return (
    <div id="about" className="w-[100%] px-7 sm:px-24 pt-28">
      <div className="flex flex-col items-center space-y-8 sm:space-y-20 ">
        <div className="flex items-center space-x-3">
          <p className="font-mono text-xs text-center">Get to know</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl">About Me</h1>
        </div>
        <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0  sm:justify-between ">
          <div className="p-2 border border-[#2a8171]  inline-block rounded-full sm:rounded-md ">
            <img
              className="object-cover rounded-full sm:rounded-none h-36 w-36 sm:h-96 sm:w-96 "
              src="../image/shades.jpg"
              alt="/"
            />
            <div className="w-full h-full bg-black "></div>
          </div>
          <div className="w-[100%] space-y-2 sm:w-[53%] sm:space-y-4">
            <h3 className="text-[#22a18a] text-xl text-center sm:text-left  font-extralight">
              Who I am ?
            </h3>
            <h2 className="font-sans text-center text-2xl sm:text-5xl sm:text-left ">
              I am Abhinav Rautela{" "}
            </h2>
            <p className=" text-justify pb-4  border-b border-[#292626]">
              I am a freelancer based in the India and I have been building
              programs UI designs and websites, which comply with the latest
              design trends. I help convert a vision and an idea into meaningful
              and useful products.
            </p>
            <div className="block sm:flex justify-between">
              <div>
                <p className="text-white">
                  Name:
                  <span className=" ml-2 text-gray-400">Abhinav Rautela</span>
                </p>
                <p className="text-white">
                  Email:
                  <span className="text-[#22a18a] ml-2 cursor-pointer">
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href = "mailto:rautela014@gamil.com";
                        e.preventDefault();
                      }}
                    >
                      rautela014@gamil
                    </Link>
                  </span>
                </p>
              </div>
              <div>
                <p className="text-white">
                  Age:
                  <span className="ml-2  text-gray-400">21</span>
                </p>
                <p className="text-white">
                  From:
                  <span className="ml-2  text-gray-400">UK, India</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between sm:justify-start sm:space-x-4 items-center grow">
              <a href="../image/myCV.png" download="AbhinavCV">
                <Button myTheme="notsimple">Download CV</Button>
              </a>
              <span className="w-8 sm:w-20 border border-gray-400"></span>
              <div className="flex">
                <div className="cursor-pointer">
                  <a href="https://twitter.com/A6hi9v" target="_blank">
                    <BsTwitter />
                  </a>
                </div>
                <div className="ml-3 cursor-pointer">
                  <BsInstagram />
                </div>
                <div className="ml-3 hidden sm:block cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/abhinav-rautela/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </div>
                <div className="ml-3 cursor-pointer">
                  <a href="https://github.com/abhinavrautela" target="_blank">
                    <BsGithub />
                  </a>
                </div>
                <div className="ml-3 hidden sm:block cursor-pointer">
                  <a href="" target="_blank">
                    <BsFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start w-full space-y-10">
          <div>
            <div className="pb-7 inline-block space-y-2">
              <h2 className="tracking-widest font-pop">Tools</h2>
              <p className="text-xs tracking-tighter text-center">
                Which I use !
              </p>
            </div>

            <div className="flex sm:justify-between items-center p-6 overflow-x-auto ">
              <BsChevronCompactLeft size={30} />
              <Card>
                <DiHtml5 size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  HTML5
                </h3>
              </Card>
              <Card>
                <DiCss3 size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  Css3
                </h3>
              </Card>
              <Card>
                <DiNodejsSmall size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  Node
                </h3>
              </Card>
              <Card>
                <DiReact size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  React
                </h3>
              </Card>
              <Card>
                <SiTailwindcss size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  TailwindCSS
                </h3>
              </Card>
              <Card>
                <BsGithub size="40" />
                <h3 className="sm:text-lg text-xm font-mono sm:font-bold ">
                  GIT
                </h3>
              </Card>
              <BsChevronCompactRight size={30} />
            </div>
          </div>
        </div>
        {/*  TESTIMONIALS */}
        {/* <div className="w-full relative">
          <div className="rounded-full absolute top-[50%] select-none z-[2] -left-5 p-3 cursor-pointer shadow-lg text-gray-200  bg-[#606060]  hover:text-[#22a18a]">
            <AiOutlineLeft />
          </div>
          <div className="pb-7 space-y-4 inline-block">
            <h2 className="tracking-wide font-pop">Testimonials</h2>
            <p className="text-xs text-center ">
              What my clients think about me
            </p>
          </div>
          <div className=" flex sm:space-x-10 space-x-3 overflow-x-auto pb-4 h-max">
            <Card myTheme="notask">
              <div className="">
                <div className="flex justify-between  items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className=" object-cover rounded-full h-16 w-16 "
                      src="../image/Img.avif"
                      alt="/"
                    />
                    <span>
                      <h3>Mike</h3>
                      <p className="text-sm">Customer</p>
                    </span>
                  </div>
                  <RiDoubleQuotesR size="35" />
                </div>
                <div className="pt-4 w]">
                  <p className="text-base text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt necessitatibus enim ut incidunt totam rem praesentium
                    excepturi, perferendis labore est accusamus facilis nisi
                    tempora quasi illo quisquam saepe nostrum cumque? Eaque aut,
                    vitae nisi laudantium ex facere iste quis itaque voluptas
                    odit adipisci nam accusantium quae iusto ea porro autem sunt
                    totam.
                  </p>
                </div>
              </div>
            </Card>
            <Card myTheme="notask">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className=" object-cover rounded-full h-16 w-16 "
                      src="../image/Img.avif"
                      alt="/"
                    />
                    <span>
                      <h3>Mike</h3>
                      <p className="text-sm">Customer</p>
                    </span>
                  </div>
                  <RiDoubleQuotesR size="35" />
                </div>
                <div className="pt-4 w]">
                  <p className="text-base text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt necessitatibus enim ut incidunt totam rem praesentium
                    excepturi, perferendis labore est accusamus facilis nisi
                    tempora quasi illo quisquam saepe nostrum cumque? Eaque aut,
                    vitae nisi laudantium ex facere iste quis itaque voluptas
                    odit adipisci nam accusantium quae iusto ea porro autem sunt
                    totam.
                  </p>
                </div>
              </div>
            </Card>
            <Card myTheme="notask">
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className=" object-cover rounded-full h-16 w-16 "
                      src="../image/Img.avif"
                      alt="/"
                    />
                    <span>
                      <h3>Mike</h3>
                      <p className="text-sm">Customer</p>
                    </span>
                  </div>
                  <RiDoubleQuotesR size="35" />
                </div>
                <div className="pt-4 ">
                  <p className="text-base text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sunt necessitatibus enim ut incidunt totam rem praesentium
                    excepturi, perferendis labore est accusamus facilis nisi
                    tempora quasi illo quisquam saepe nostrum cumque? Eaque aut,
                    vitae nisi laudantium ex facere iste quis itaque voluptas
                    odit adipisci nam accusantium quae iusto ea porro autem sunt
                    totam.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="rounded-full absolute top-[50%] select-none z-[2] -right-5 p-3 cursor-pointer  text-gray-200 bg-[#606060]     hover:text-[#22a18a]">
            <AiOutlineRight className="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
