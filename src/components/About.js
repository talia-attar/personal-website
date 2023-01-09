import { ChevronRightIcon } from "@primer/octicons-react";

export const About = () => {
  return (
    <section name="about" id="about" className="w-full h-full ">
      <div className="  p-4 mx-auto mt:auto flex  flex-col justify-center w-full h-full  bg-gradient-to-bl from-violet-200 via-indigo-100 to-blue-200  ">
        <div className="max-w-screen-lg">
          <div className="pb-8">
            <p className="text-3xl font-extrabold inline ">ABOUT ME</p>
          </div>
          <div className="w-full md:w-2/3 md:ml-20">
            <p>
              Hi! I am Talia, and I blah blah love math and computer. I like to
              code because it is fun.
            </p>
            <p>
              I have previously worked as a Software Engineer Intern at Nuance
              Communications and developed a back-end feature for an A.I.
              healthcare product. I also have published research using VR to
              stduy food purchasing beahviors through a public health lens.
            </p>
            <div className="flex justify-right my-4">
              <div className="mr-6">
                <p className="font-bold text-lg">INTERESTS</p>
                <ul className="pl-1">
                  <li>
                    {" "}
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Responsible AI
                  </li>
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Public Health
                  </li>
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Visualization
                  </li>
                </ul>
              </div>
              <div className=" ">
                <p className="font-bold text-lg">HOBBIES</p>
                <ul className="pl-1">
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Visual Arts
                  </li>
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Reading
                  </li>
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    Running
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
