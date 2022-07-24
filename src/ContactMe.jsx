import React from "react";
import Button from "./Button";

const ContactMe = () => {
  return (
    <div className="w-[100%] px-5 sm:px-24 pt-24 ">
      <div className="text-center">
        <p className="tracking-tighter text-sm">
          Feel free to contact me anytime
        </p>
        <h1>Get in Touch</h1>
      </div>
      <div className="pt-14">
        <div>
          <div className="w-[47%] space-y-3">
            <h3 className="text-2xl font-semibold">Message me</h3>
            <div className=" flex justify-between items-center ">
              <div className="w-[46%]">
                <input
                  placeholder="Name "
                  value={""}
                  onChange={""}
                  type="text"
                  className="bg-[#1e1b1b] w-full p-3 outline-none  border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
                />
              </div>
              <div className="w-[46%]">
                <input
                  placeholder="Email"
                  value={""}
                  onChange={""}
                  type="text"
                  className="bg-[#1e1b1b] w-full p-3 outline-none  border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
                />
              </div>
            </div>
            <div className="space-y-3">
              <input
                placeholder="Subject"
                value={""}
                onChange={""}
                type="text"
                className="bg-[#1e1b1b] w-full p-3 outline-none border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
              />
              <textarea
                placeholder="Message"
                className="bg-[#1e1b1b] w-full h-28 p-3 outline-none  border-b border-b-[#1e1b1b] focus:border-b-[#2a8171]"
              ></textarea>
             <Button children={"Send Message"} myTheme="simple"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
