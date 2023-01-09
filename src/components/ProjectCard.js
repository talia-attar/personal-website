import { FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  link,
  img,
  styleS,
  styleH,
}) => {
  return (
    <div className={"bg-indigo-100 rounded text-black w-full h-full " + styleS}>
      <a href={link} className="no-underline">
        <div className="md:mx-5 py-3  text-black">
          <div className="flex justify-between mx-2">
            {" "}
            <FaLaptopCode size={25} />
            <div className={styleH}>
              <FaExternalLinkAlt size={20} />
            </div>
          </div>
          <div className=" mx-2">
            <h4 className="text-black mt-3  ">{title}</h4>
            <p className="text-black">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
