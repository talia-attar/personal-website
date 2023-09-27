import { ChevronRightIcon } from "@primer/octicons-react";

export const About = () => {
  return (
    <section name="about" id="about" className="w-full h-full ">
      <div className="  p-4 mx-auto mt:auto flex  flex-col justify-center w-full h-full  bg-gradient-to-bl from-violet-200 via-indigo-100 to-blue-200  ">
        <div className="max-w-screen-lg">
          <div className="pb-8 pt-4">
            <p className="text-3xl font-extrabold inline ">ABOUT ME</p>
          </div>
          <div className="w-full md:w-5/6 md:ml-20 text-lg ">
            <p>
              Hi! My name is Talia, and I use code to develop elegant solutions
              to challenging problems. I enjoy building software, analyzing
              data, and constructing visualizations. I am highly motivated and
              excited to grow my skills in a collaborative environment upon my
              graduation.
            </p>
            <p>
              As a Software Engineer Intern, I designed and implemented a
              backend feature for a healthcare-related A.I. product. I have also
              published and presented research which explores the use of Virtual
              Reality to study food consumer behavior under a grant from the
              National Science Foundation.
            </p>
            <p>
              In addition to my passion for technology, I am an artist. I
              believe that my artistic background gives me a unique perspective
              on problem-solving and allows me to approach technical challenges
              with a creative mindset. Whether it's through coding or creating,
              I am constantly seeking innovative ways to bring new projects to
              life.
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
                    Critical Technology Studies
                  </li>
                  <li>
                    <ChevronRightIcon
                      size={12}
                      className="mb-1 mr-1"
                      color="black"
                    />
                    The Fediverse
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
                    Coffee-drinking
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
