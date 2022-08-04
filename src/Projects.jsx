import React from "react";
import { BiLink } from "react-icons/bi";
import { DiReact, DiJavascript1 } from "react-icons/di";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-[100%] px-7 flex flex-col items-center sm:px-24 pt-28 space-y-20"
    >
      <div className="flex items-center space-x-3">
        <p className="tracking-tighter text-center text-xs">Do check my</p>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl">Recent Projects</h1>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 w-[80%]">
        <div className="flex flex-col border border-[#0f4037] shadow-sm shadow-[#3f7269]">
          <div className="overflow-hidden px-5">
            <a href="https://dainty-llama-a65461.netlify.app/" target="_blank">
              <img
                src="../projectImage/todo.png"
                alt="/"
                className="h-44 w-72  ease-in duration-300  hover:scale-105"
              />
            </a>
          </div>
          <div className="px-2 border-t border-[#0f4037] space-y-1">
            <h3 className="text-base font-mono">whatToDo</h3>

            <span className="flex items-center ml-2">
              <BiLink size={10} />
              <a
                className="text-sm ml-1 text-gray-300 underline font-thin opacity-60"
                href="https://dainty-llama-a65461.netlify.app/"
                target="_blank"
              >
                https://todo.app
              </a>
            </span>
            <div className="flex items-center space-x-2 ml-1">
              <DiReact />
              <span className="text-sm underline opacity-40">React</span>

              <DiJavascript1 />
              <span className="text-sm underline opacity-40">JavaScript</span>
            </div>
            <div className="bg-purple-500 bg-opacity-30 inline-block px-2  rounded-md">
              <h5 className="text-purple-300  text-xs font-thin">App</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-[#0f4037] shadow-sm shadow-[#3f7269]">
          <div className="overflow-hidden px-5">
            <a href="https://dainty-llama-a65461.netlify.app/" target="_blank">
              <img
                src="../projectImage/todo.png"
                alt="/"
                className="h-44 w-72  ease-in duration-300  hover:scale-105"
              />
            </a>
          </div>
          <div className="px-2 border-t border-[#0f4037] space-y-1">
            <h3 className="text-base font-mono">whatToDo</h3>

            <span className="flex items-center ml-2">
              <BiLink size={10} />
              <a
                className="text-sm ml-1 text-gray-300 underline font-thin opacity-60"
                href="https://dainty-llama-a65461.netlify.app/"
                target="_blank"
              >
                https://todo.app
              </a>
            </span>
            <div className="flex items-center space-x-2 ml-1">
              <DiReact />
              <span className="text-sm underline opacity-40">React</span>

              <DiJavascript1 />
              <span className="text-sm underline opacity-40">JavaScript</span>
            </div>
            <div className="bg-purple-500 bg-opacity-30 inline-block px-2  rounded-md">
              <h5 className="text-purple-300  text-xs font-thin">App</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
