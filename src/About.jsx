import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
  BsFacebook,
} from "react-icons/bs";
import { DiCss3, DiJavascript1, DiHtml5, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { RiDoubleQuotesR } from "react-icons/ri";
import Card from "./Card";

const About = () => {
  return (
    <div className="w-[100%] px-5 sm:px-24 pt-5 ">
      <div className="flex flex-col items-center space-y-8 sm:space-y-20 ">
        <div>
          <p className="font-mono text-xs text-center">Get to know</p>
          <h1>About Me</h1>
        </div>
        <div className="flex flex-col items-center sm:flex-row  sm:justify-between ">
          <div className="p-2 border border-[#2a8171] inline-block rounded-full sm:rounded-md ">
            <img
              className="object-cover rounded-full sm:rounded-none h-36 w-36 sm:h-96 sm:w-96 "
              src="../image/Img.avif"
              alt="/"
            />
          </div>
          <div className=" sm:w-[53%] space-y-4">
            <h3 className="text-[#22a18a] text-xl font-extralight">
              Who I am ?
            </h3>
            <h2 className="font-sans">I am Abhinav Rautela </h2>
            <p className=" text-justify pb-4  border-b border-[#292626]">
              I am a freelancer based in the India and I have been building
              programs UX/UI designs and websites, which comply with the latest
              design trends. I help convert a vision and an idea into meaningful
              and useful products. Having a sharp eye for product evolution
              helps me prioritize tasks, iterate fast and deliver faster.
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
            <div className="flex space-x-4 items-center grow">
              <Button>Download CV</Button>
              <span className=" border border-gray-600 w-20"></span>
              <div className="flex ">
                <div className="ml-3 cursor-pointer">
                  <a href="https://twitter.com/A6hi9v" target="_blank">
                    <BsTwitter />
                  </a>
                </div>
                <div className="ml-3 cursor-pointer">
                  <a href="https://instagram.com/A6hi9v" target="_blank">
                    <BsInstagram />
                  </a>
                </div>
                <div className="ml-3 cursor-pointer">
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
                <div className="ml-3 cursor-pointer">
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
            <div className="pb-7">
              <h2>Skills</h2>
              <p className="text-xs">What can I do</p>
            </div>
            <div className="space-y-5 hidden sm:block">
              <div className="flex justify-between">
                <Card>
                  <DiHtml5 size="60" />
                  <h3 className="text-xl font-normal">HTML5</h3>
                </Card>
                <Card>
                  <DiCss3 size="60" />
                  <h3 className="text-xl font-normal">Css3</h3>
                </Card>
                <Card>
                  <DiJavascript1 size="60" />
                  <h3 className="text-xl font-normal">JavaScript</h3>
                </Card>
              </div>
              <div className="flex justify-between">
                <Card>
                  <DiReact size="60" />
                  <h3 className="text-xl font-normal">React</h3>
                </Card>
                <Card>
                  <SiTailwindcss size="60" />
                  <h3 className="text-xl font-normal">TailwindCSS</h3>
                </Card>
                <Card>
                  <BsGithub size="60" />
                  <h3 className="text-xl font-normal">GIT</h3>
                </Card>
              </div>
            </div>
            <div className="block sm:hidden">
              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <DiHtml5 size="60" />
                  <h3 className="text-xl font-normal">HTML5</h3>
                </div>
              </Card>
              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <DiCss3 size="60" />
                  <h3 className="text-xl font-normal">Css3</h3>
                </div>
              </Card>
              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <DiJavascript1 size="60" />
                  <h3 className="text-xl font-normal">JavaScript</h3>
                </div>
              </Card>

              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <DiReact size="60" />
                  <h3 className="text-xl font-normal">React</h3>
                </div>
              </Card>
              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <SiTailwindcss size="60" />
                  <h3 className="text-xl font-normal">TailwindCSS</h3>
                </div>
              </Card>
              <Card>
                <div className="w-[85%] flex justify-between items-center">
                  <BsGithub size="60" />
                  <h3 className="text-xl font-normal">GIT</h3>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="pb-7">
            <h2>Testimonials</h2>
            <p className="text-xs">What my clients think about me</p>
          </div>
          <div className="sm:flex space-x-2 hidden">
            <Card myTheme="notask">
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
            </Card>
            <Card myTheme="notask">
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
            </Card>
            <Card myTheme="notask">
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
            </Card>
          </div>

          <div className="sm:hidden space-y-5">
            <Card myTheme="notask">
              <div className="flex w-full justify-between items-center">
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
            </Card>

            <Card myTheme="notask">
              <div className="flex w-full justify-between items-center">
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
            </Card>

            <Card myTheme="notask">
              <div className="flex w-full justify-between items-center">
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
