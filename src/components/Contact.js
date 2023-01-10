import React from "react";
import video from "../assets/video.mp4";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <FaLinkedin size={50} className=" duration-300 hover:text-blue-500" />
      ),
      href: "https://www.linkedin.com/in/talia-attar-14a63a1a8/",
    },
    {
      id: 2,
      child: (
        <FaGithub size={50} className=" duration-300 hover:text-blue-500" />
      ),
      href: "https://github.com/talia-attar",
    },
    {
      id: 3,
      child: (
        <HiOutlineMail
          size={50}
          className=" duration-300 hover:text-blue-500"
        />
      ),
      href: "mailto:tda25@cornell.edu",
    },
  ];
  return (
    <section name="contact" id="5" className="w-full h-full">
      <div className="p-4 mx-auto flex flex-col justify-center w-full h-max bg-white ">
        <div className="pb-8 pt-4">
          <p className="text-3xl font-extrabold inline ">GET IN TOUCH</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center w-full md:w-2/3 md:ml-20 max-w-screen-lg">
          <div className="px-4 p-10 justify-center items-center">
            <p className="text-xl justify-center font-semibold">
              Please say hi, I'm always excited to connect!
            </p>
            <div className="flex mt-10 items-center justify-center">
              {links.map(({ id, child, href, style }) => (
                <a
                  key={id}
                  href={href}
                  className="no-underline flex mx-4 w-fit  text-black duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {child}
                </a>
              ))}
            </div>
          </div>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Contact;
