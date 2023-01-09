import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },

    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black md:bg-white md:fixed z-10">
      <div>
        <p className="text-xl font-signature ml-2">tda25@cornell.edu</p>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium  hover:scale-105  duration-200"
          >
            <Link to={link} smooth duration={300} offset={-60}>
              <p className="hover:text-blue-500 ">{link}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black  md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="hover:text-blue-500" />
        ) : (
          <FaBars size={30} className="hover:text-blue-500" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0  left-0 w-full h-screen bg-gradient-to-bl from-violet-200 via-indigo-100 to-blue-200  ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                <p className="font-bold hover:text-blue-500 ">{link}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    //   <Navbar expand="lg">
    //     <Container className="flex justify-between items-center w-full h-20 px-4 text-black bg-gray-100 fixed">
    //       <Navbar.Brand href="#home">
    //         <img src={logo} alt="Logo" />
    //       </Navbar.Brand>

    //       <Nav className="hidden md:flex">
    //         {links.map(({ id, link }) => (
    //           <Nav.Link
    //             key={id}
    //             className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
    //           >
    //             {link}
    //           </Nav.Link>
    //         ))}
    //       </Nav>
    //       <div
    //         onClick={() => setNav(!nav)}
    //         className="cursor-pointer pr-4 z-10 text-black md:hidden"
    //       >
    //         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    //       </div>

    //       {nav && (
    //         <Nav className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ">
    //           {links.map(({ id, link }) => (
    //             <Nav.Link
    //               key={id}
    //               className="px-4 cursor-pointer capitalize py-6 text-4xl"
    //             >
    //               {link}
    //             </Nav.Link>
    //           ))}
    //         </Nav>
    //       )}
    //     </Container>
    //   </Navbar>
    // );
  );
};
