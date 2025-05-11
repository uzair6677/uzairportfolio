import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyle=isSelected ? 'text-white bg-red-500':'text-[#ADB7BE] border-slate-600 hover:border-white'
  return (
    <button className={`${buttonStyle} rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
  )
}

export default ProjectTag
