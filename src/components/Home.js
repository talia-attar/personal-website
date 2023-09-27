import heroImage from "../assets/gradHeadShot.png";

import { AiFillMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <section name="home" id="home" className="w-full h-full bg-white">
      <div className="max-w-screen-lg flex flex-col justify-center w-full h-full  ">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:pt-20 gap-0 px-0 justify-center h-full">
          <div className="hidden h-0 md:flex md:h-full bg-white overflow-hidden">
            <img
              src={heroImage}
              alt="my profile"
              className="object-scale-down overflow-hidden"
            ></img>
          </div>
          <div className="pt-10 md:pt-20 pb-10 pl-10 text-left">
            <div className="flex justify-right">
              <h1 className="text-black capitalize text-3xl font-bold">
                TALIA ATTAR
              </h1>
              <a
                href="mailto:tda25@cornell.edu"
                target="_blank"
                rel="noreferrer"
                className=" text-black duration-200 hover:scale-105  "
              >
                <AiFillMail
                  size={35}
                  className=" ml-5 mr-4  p-1 hover:text-blue-500"
                />
              </a>

              <a
                href="resume.pdf"
                download={true}
                target="_blank"
                rel="noreferrer"
                className=" text-black duration-200 hover:scale-105  "
              >
                <BsFillPersonLinesFill
                  size={35}
                  className="p-1 hover:text-blue-500"
                />
              </a>
            </div>
            <div className="py-4">
              <h1 className="text-black capitalize text-4xl font-bold">
                Developer.
              </h1>
              <h1 className="text-black capitalize text-4xl font-bold">
                Collaborator.
              </h1>
              <h1 className="text-black capitalize text-4xl font-bold">
                Problem Solver.
              </h1>
            </div>
            <div>
              <p>
                Technology builder and advocate with a deep-seated passion for
                creating impactful solutions that serve the people. Adept at
                bridging the gap between user perspectives and cutting-edge
                technology.
              </p>
            </div>
            <div className="mt-4">
              <Link to="contact" smooth duration={300} offset={-60}>
                <button className="flex font-semibold text-lg border-2 border-black p-1 duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                  Let's Connect
                  <BsArrowRightCircleFill size={20} className="ml-3 mt-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
