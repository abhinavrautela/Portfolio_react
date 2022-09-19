import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { VscSymbolNamespace } from "react-icons/vsc";
import { IoMdCall, IoIosSend } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { userSchema } from "./UserVelidation";
const ContactMe = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState();
  let myTheme = "simple";
  let buttonChild = "Send Message";
  if (messageSent) {
    myTheme = "messageTrue";
    buttonChild = "✔ Delivered";
  }


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vfrj5j7",
        "template_clpqvt9",
        form.current,
        "H9MOCyXs2tMR2zshy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, "4000");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="w-[100%] flex flex-col items-center  px-5 sm:px-24 pt-24 "
    >
      <div className="flex items-center space-x-3">
        <p className="tracking-tighter text-center text-xs flex items-center">
          Feel free to
          <span className="text-3xl sm:text-5xl lg:text-6xl font-pop text-gray-200 mx-4">
            Contact Me
          </span>
          anytime
        </p>
      </div>
      <div className="pt-14 sm:flex space-y-8 sm:space-y-0 justify-between">
        <div className="sm:w-[60%] space-y-3">
          <h3 className="text-2xl font-semibold">Message me</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-between items-center mb-2">
              <div className="w-[46%]">
                <input
                  placeholder="Name"
                  className="bg-[#1e1b1b] w-full p-3 outline-none text-sm border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="w-[46%]">
                <input
                  placeholder="Email"
                  name="user_email"
                  type="email"
                  className="bg-[#1e1b1b] w-full p-3 outline-none text-sm border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
                />
              </div>
            </div>
            <div className="space-y-3">
              <input
                placeholder="Subject"
                type="text"
                name="user_subject"
                className="bg-[#1e1b1b] w-full p-3 outline-none border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
              />
              <textarea
                placeholder="Message"
                name="message"
                className="bg-[#1e1b1b] w-full h-32 p-3 outline-none  border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
              ></textarea>
              <Button
                children={buttonChild}
                myTheme={myTheme}
                onClick={sendEmail}
              />
            </div>
          </form>
        </div>

        <div className="sm:w-[35%] w-full space-y-4">
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p>
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>

          <div>
            <IconContext.Provider value={{ color: "#2a8171" }}>
              <div className="flex  items-center py-2">
                <div className="pr-5">
                  <VscSymbolNamespace size="30" />
                </div>
                <div className="pl-16 border-l-2 border-gray-300 ">
                  <h3 className="font-semibold text-xl">Name</h3>
                  <p className="text-sm">Abhinav Rautela</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="pr-5">
                  <ImLocation size="30" />
                </div>
                <div className="pl-16 border-l-2 border-gray-300">
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-sm">Nainital, 263002</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="pr-5">
                  <IoMdCall size="30" />
                </div>
                <div className="pl-16 border-l-2 border-gray-300">
                  <h3 className="font-semibold text-xl">PhoneNO.</h3>
                  <p className="text-sm">12345</p>
                </div>
              </div>
              <div className="flex items-center py-2">
                <div className="pr-5">
                  <IoIosSend size="30" />
                </div>
                <div className="pl-16 border-l-2 border-gray-300">
                  <h3 className="font-semibold text-xl ">EMail</h3>
                  <p className="text-sm">
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href = "mailto:rautela014@gamil.com";
                        e.preventDefault();
                      }}
                    >
                      rautela014@gamil
                    </Link>
                  </p>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
