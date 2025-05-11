import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { FiEye } from "react-icons/fi";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description,gitUrl , previewUrl }) => {
  return (
    <div className="px-3">
      <div
        className=" md:h-72 py-3 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Overlay div - contains both the dark background and the centered icon */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-all duration-500 group/link">
          {/* Link wrapper for the icon - flex centering ensures icon stays centered */}
          <Link 
            href={gitUrl} 
            className="h-14 w-14 mr-2   border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center  group-hover/link:text-white"
          >
            {/* Icon - simplified styling since parent handles centering */}
            <HiCodeBracket className='h-10  w-10 text-[#ADB7BE]  cursor-pointer group-hover:text-white' />
          </Link>
          <Link 
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center  group-hover/link:text-white"
          >
            {/* Icon - simplified styling since parent handles centering */}
            <FiEye className='h-10 w-10 text-[#ADB7BE]  cursor-pointer group-hover:text-white' />
          </Link>
        </div>
      </div>
      <div className="text-white mb-3 rounded-b-xl bg-black opacity-100 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;