import { Link } from "react-router-dom";
import FrontPage from "./FrontPage";
import { useState } from "react";
import { AiOutlineClose, AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggalNav = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <div>
        <div className="p-1 w-full h-100 z-[100] fixed bg-black/70">
          <div
            className={navBar ? "hidden" : "flex items-center justify-between"}
          >
            <div className="">
              <img
                className="h-10 w-20"
                src="../image/SignAR.png"
                alt="/"
              />
            </div>
            <div>
              <div className="hidden font-semibold text-white p-2 sm:flex  uppercase">
                <Link to="/home">
                  <h1 className="ml-10 text-sm hover:scale-125 ease-in-out  duration-200">
                    Home
                  </h1>
                </Link>
                <Link to="/about">
                  <h1 className="ml-10 text-sm hover:scale-125 ease-in-out  duration-200">
                    About
                  </h1>
                </Link>
                <Link to="/skills">
                  <h1 className="ml-10 text-sm hover:scale-125 ease-in-out  duration-200">
                    Skills
                  </h1>
                </Link>
                <Link to="/project">
                  <h1 className="ml-10 text-sm hover:scale-125 ease-in-out  duration-200">
                    Project
                  </h1>
                </Link>
                <Link to="/contact">
                  <h1 className="ml-10 text-sm hover:scale-125 ease-in-out  duration-200">
                    Contact
                  </h1>
                </Link>
              </div>

              <div className="sm:hidden p-2">
                <CgMenuRight onClick={toggalNav} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            navBar
              ? "fixed ease-in duration-300 top-0 left-0 w-full h-screen bg-black/90"
              : ""
          }
        >
          <div
            className={
              navBar
                ? "fixed  duration-500 p-6 top-0 left-0 w-[75%] sm:w-[65%] md:w-[40%] h-screen "
                : "fixed left-[-100%] h-screen top-0 ease-in duration-100 "
            }
          >
            <div>
              <div className="flex w-full justify-between items-center">
                <div>
                  <img
                    className="h-10 w-20"
                    src="../image/SignAR.png"
                    alt="/"
                  />
                </div>
                <div className="rounded-full p-1 cursor-pointer shadow-lg text-gray-200  shadow-[#171515] hover:bg-[#1f1d1d]">
                  <AiOutlineClose onClick={toggalNav} />
                </div>
              </div>
              <div>
                <p className="w-[85%] sm:w-[65%] px-3 py-2 text-gray-300 font-serif italic">
                  &ldquo; Let&#39;s built somthing Awesome together &rdquo;
                </p>
              </div>
              <div className="py-4 flex flex-col uppercase tracking-wide text-white font-thin">
                <Link to="/home">
                  <h1 className="p-2 text-sm">Home</h1>
                </Link>
                <Link to="/about">
                  <h1 className="p-2 text-sm">About</h1>
                </Link>
                <Link to="/skills">
                  <h1 className="p-2 text-sm">Skills</h1>
                </Link>
                <Link to="/project">
                  <h1 className="p-2 text-sm">Projects</h1>
                </Link>
                <Link to="/contact">
                  <h1 className="p-2 text-sm">Contact</h1>
                </Link>

                <div className="pt-40 pb-2">
                  <p className="text-[#4945d4] tracking-widest uppercase font-semibold">
                    Let&#39;s Connect
                  </p>
                  <div className="flex py-3 space-x-8">
                    <div className="rounded-full p-3 cursor-pointer shadow-lg text-gray-200 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <GrLinkedinOption />
                    </div>
                    <div className="rounded-full p-3 cursor-pointer shadow-lg text-gray-200 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <AiFillGithub />
                    </div>
                    <div className="rounded-full p-3 cursor-pointer shadow-lg text-gray-200 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <MdMailOutline />
                    </div>
                    <div className="rounded-full p-3 cursor-pointer shadow-lg text-gray-200 shadow-gray-900 hover:bg-[#101010] ease-in duration-300">
                      <BsFillPersonLinesFill />
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
export default Navbar;
