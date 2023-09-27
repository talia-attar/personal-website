import { Row, Col, Tab, Nav } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaRProject,
  FaGithub,
  FaUnity,
  FaDocker,
} from "react-icons/fa";

import {
  SiOcaml,
  SiJavascript,
  SiC,
  SiHeroku,
  SiDjango,
  SiMicrosoftazure,
} from "react-icons/si";

import { ChevronRightIcon } from "@primer/octicons-react";

import { AiOutlineConsoleSql, AiOutlineDownload } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
const Resume = () => {
  const languages = [
    {
      id: 1,
      name: "Python",
      src: <FaPython size={70} />,
    },
    {
      id: 2,
      name: "Java",
      src: <FaJava size={70} />,
    },
    {
      id: 3,
      name: "C",
      src: <SiC size={70} />,
    },
    {
      id: 4,
      name: "OCaml",
      src: <SiOcaml size={70} />,
    },

    {
      id: 5,
      name: "SQL",
      src: <AiOutlineConsoleSql size={70} />,
    },
    {
      id: 6,
      name: "R",
      src: <FaRProject size={70} />,
    },
    {
      id: 7,
      name: "HTML/CSS",
      src: <FaHtml5 size={70} />,
    },
    {
      id: 8,
      name: "JavaScript",
      src: <SiJavascript size={70} />,
    },
  ];

  const tools = [
    {
      id: 1,
      name: "GitHUb",
      src: <FaGithub size={70} />,
    },
    {
      id: 2,
      name: "Unity",
      src: <FaUnity size={70} />,
    },
    {
      id: 3,
      name: "Django",
      src: <SiDjango size={70} />,
    },
    {
      id: 4,
      name: "Docker",
      src: <FaDocker size={70} />,
    },
    {
      id: 5,
      name: "Heroku",
      src: <SiHeroku size={70} />,
    },
    {
      id: 6,
      name: "Azure Events Hub",
      src: <SiMicrosoftazure size={70} />,
    },
  ];

  const experiences = [
    {
      id: 1,
      key: "first",
      name: "Software Engineer",
      date: "Present",
      description: [
        "Contribute to SaaS product with complex, distributed architecture",
        "Implement in Java to make meaningful optimization to system backend",
      ],
    },
    {
      id: 2,
      key: "second",
      name: "R.E.U. Participant @ Hunter College",
      date: "Summer 2022",
      description: [
        "Conducted research in the Visualization and Virtual Reality Lab focused on applying V.R. to public health",
        "Developed a virtual reality simulation using Unity and deployed to a head-mounted V.R. display",
        "Organized and led a study where participants used the simulation and wrote research paper on findings",
      ],
    },
    {
      id: 3,
      key: "third",
      name: "Teacher's Assistant @ Cornell University",
      date: "Spring & Fall 2022",
      description: [
        "Taught lab sections, held office hours, and graded student work for CS 3410 (Computer System Organization and Programming) at Cornell University",
      ],
    },
    {
      id: 4,
      key: "fourth",
      name: "Software Engineer Intern @ Nuance Communications",
      date: "Summer 2021",
      description: [
        "Designed and implemented an A.I. feedback loop using Java and Azure Events Hub",
        "Engaged in cross-team communication to understand and incorporate requirements in project",
        "Developed a REST API for application client collaboratively with another intern",
      ],
    },
    {
      id: 5,
      key: "fifth",
      name: "Data Analysis Intern @ Community Research Initiative",
      date: "Summer 2020",
      description: [
        "Analyzed and compared pharmacy information across four databases and presented findings using Excel",
        "Queried specific tables from databases using T-SQL",
        "Attended Data Team meetings and assisted in administrative tasks such as sending bulk faxes",
      ],
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section name="experience" id="experience" className="w-full h-max">
      <div className="p-4 flex flex-col justify-center w-full h-full bg-gradient-to-bl from-violet-200 via-indigo-100 to-blue-200 ">
        <div className="pb-8 pt-4">
          <p className="text-3xl font-extrabold inline ">EXPERIENCE</p>
          <a
            href="resume.pdf"
            download={true}
            target="_blank"
            rel="noreferrer"
            className="no-underline text-black duration-200 hover:scale-105  "
          >
            <p className="mt-4 flex font-semibold text-lg hover:scale-105 w-fit h-min">
              Download Resume <AiOutlineDownload size={25} className="ml-2" />
            </p>
          </a>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center max-w-screen-lg">
            <div className="flex flex-col h-full w-full  bg-white p-2">
              <p className="text-3xl font-bold text-stone-900 ml-5 mt-3">
                Where I've Worked
              </p>
              <Tab.Container id="resume-tabs" defaultActiveKey="first">
                <Row>
                  <Col md={3}>
                    <Nav defaultActiveKey="/first" className=" " id="item-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Healthedge</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hunter</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Cornell</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Nuance</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">CRI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={9}>
                    <Tab.Content>
                      {experiences.map(
                        ({ id, key, name, date, description }) => (
                          <Tab.Pane
                            key={id}
                            eventKey={key}
                            className="text-stone-900"
                          >
                            <p className="pt-2 font-bold text-xl">{name}</p>
                            <p className="font-bold">{date}</p>
                            <ul className="list-none mx-0 p-0">
                              {description.map((value, index) => {
                                return (
                                  <li key={index}>
                                    <ChevronRightIcon
                                      size={12}
                                      className="mb-1 mr-1"
                                      color="black"
                                    />
                                    {value}
                                  </li>
                                );
                              })}
                            </ul>
                          </Tab.Pane>
                        )
                      )}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
            <div className="md:text-right text-left w-full text-stone-900 bg-white px-4">
              <p className="text-3xl  font-bold  md:mr-5 ml-5 mt-3 md:ml-0 border-black">
                {" "}
                What I've Worked With
              </p>

              <p className="text-xl md:mr-5 ml-5 md:ml-0 font-semibold">
                Languages
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-40-px"
              >
                {languages.map(({ id, src, name }) => (
                  <div
                    key={id}
                    className="py-2 text-stone-900 flex flex-col items-center justify-center mx-auto"
                  >
                    {src}
                    <p className="mt-1 text-sm">{name}</p>
                  </div>
                ))}
              </Carousel>
              <p className="text-xl md:mr-5 ml-5 md:ml-0 font-semibold">
                Tools & Technologies
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-40-px"
              >
                {tools.map(({ id, src, name }) => (
                  <div
                    key={id}
                    className="hover:scale-105 duration-500 py-2 text-stone-900 flex flex-col items-center justify-center"
                  >
                    {src}
                    <p className="mt-1 text-sm">{name}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
