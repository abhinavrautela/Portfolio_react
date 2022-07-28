import React from "react";
import { AiFillGithub } from "react-icons/ai";
import TextAnimation from "react-text-animations";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
const FrontPage = () => {
  return (
    <>
      <div id="home">
        <div className=" bg-black/80">
          <div className="bg-cover object-cover bg-[url(../image/BGroundXm.jpg)] sm:bg-[url(../image/BGround.avif)]">
            <div className=" bg-black/80">
              <div className="h-screen w-full sm:w-[50%] flex flex-col justify-end sm:justify-center sm:items-center ">
                <div className="flex flex-col items-center pt-20">
                  <div className="space-x-2 ">
                    <h1
                      className="hidden sm:block ml-3 font-pop
                      "
                    >
                      Abhinav Rautela
                    </h1>
                    <h1 className="sm:hidden  text-[#22a18a] ">
                      Abhinav Rautela
                    </h1>
                  </div>

                  <TextAnimation.Clip
                    target="_"
                    text={[
                      "Freelancer",
                      "Web Designer",
                      "FrontEnd Devloper",
                      "BackEnd Devloper",
                    ]}
                    cname="font-thin text-xl tracking-widest text-[#3cb29c]"
                    animation={{
                      duration: 700,
                      delay: 3000,
                      timingFunction: "ease-in-out",
                    }}
                    loop={true}
                  >
                    I&#39;m a _
                  </TextAnimation.Clip>
                </div>
                <div className="self-end sm:self-center py-4 sm:py-0 ">
                  <div className="inline-block sm:flex sm:py-3 sm:space-x-8 ">
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100  shadow-gray-900 hover:bg-[#101010] hover:text-color-[#2a8171] ease-in duration-300 hover:text-[#22a18a]">
                      <a
                        href="https://www.linkedin.com/in/abhinav-rautela/"
                        target="_blank"
                      >
                        <GrLinkedinOption />
                      </a>
                    </div>
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300 hover:text-[#22a18a]">
                      <a
                        href="https://github.com/abhinavrautela"
                        target="_blank"
                      >
                        <AiFillGithub />
                      </a>
                    </div>
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300 hover:text-[#22a18a]">
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
                    <div className="rounded-full  p-3 cursor-pointer shadow-lg text-gray-100 shadow-gray-900 hover:bg-[#101010] ease-in duration-300 hover:text-[#22a18a]">
                      <Scroll
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                      >
                        <BsFillPersonLinesFill />
                      </Scroll>
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
