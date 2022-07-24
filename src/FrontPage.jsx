import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <div>
        <div className=" bg-black/80">
          <div className="bg-cover object-cover bg-[url(../image/BGround.avif)]">
            <div className=" bg-black/80">
              <div className="h-screen w-full sm:w-[50%] flex flex-col justify-end sm:justify-center sm:items-center ">
                <div className="flex flex-col items-center pt-20">
                  <div className="space-x-2 ">
                    <h1
                      className="hidden sm:text-transparent ml-3 font-extrabold
                      sm:text-[#22a18a] sm:inline-block"
                    >
                      Abhinav Rautela
                    </h1>
                    <h1 className="sm:hidden font-bold text-white ">
                      Abhinav Rautela
                    </h1>
                  </div>
                  <p className="text-2xl font-sans text-white bg-clip-text  ml-3">
                    I&#39;m a
                    <span className="bg-clip-text ml-2 text-transparent sm:tracking-widest bg-gradient-to-r from-red-500 to-red-700">
                      Full Stack Web Devloper
                    </span>
                  </p>
                </div>
                <div className="self-end sm:self-center py-4 sm:py-0">
                  <div className="inline-block sm:flex sm:py-3 sm:space-x-8 ">
                    <div className="rounded-full p-3 cursor-pointer shadow-lg text-gray-100  shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <a
                        href="https://www.linkedin.com/in/abhinav-rautela/"
                        target="_blank"
                      >
                        <GrLinkedinOption />
                      </a>
                    </div>
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <a
                        href="https://github.com/abhinavrautela"
                        target="_blank"
                      >
                        <AiFillGithub />
                      </a>
                    </div>
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <Link
                        to="#"
                        onClick={(e) => {
                          window.location.href = "mailto:rautela014@gamil.com";
                          e.preventDefault();
                        }}
                      >
                        <MdMailOutline />
                      </Link>
                    </div>
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <a href="" target="_blank">
                        <BsFillPersonLinesFill />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
