import { ProjectCard } from "./ProjectCard";

import DTSImg from "../assets/DTSHeader.png";

export const Projects = () => {
  const projects = [
    {
      title: "VR Research",
      description:
        "Designed and implemented a VR simulation to model food purchasing behavior. Published research that used the simulation.",
      link: "https://dl.acm.org/doi/abs/10.1145/3562939.3565685",

      styleS: "duration-200 hover:scale-105",
      styleH: "duration-200 hover:scale-105 hover:text-blue-500",
    },
    {
      title: "DTS Web Development",
      description:
        "Collaboratively developed the backend of the Disrupt The System Hackathon website using Python and Django.",
      link: "",
      img: DTSImg,
      styleS: "",
      styleH: "",
    },

    {
      title: "cBay Application",
      description:
        "Implemented a marketplace application with server using OCaml with student team. Deployed application using Docker.",
      link: "https://github.com/talia-attar/cBay-backend",

      styleS: "duration-200 hover:scale-105",
      styleH: "duration-200 hover:scale-105 hover:text-blue-500",
    },
  ];

  return (
    <section name="projects" id="1" className="w-full h-full ">
      <div className="p-4 mx-auto mt:auto flex flex-col justify-center w-full h-full  bg-white ">
        <div className="pb-8 pt-4">
          <p className="text-3xl font-extrabold inline ">PROJECTS</p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 px-10 sm:px-20 md:grid-cols-3 md:my-20 gap-4 md:px-4 justify-center max-w-screen-lg">
            {projects.map((project, index) => {
              return (
                <div className="mt-2">
                  {" "}
                  <ProjectCard key={index} {...project} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
