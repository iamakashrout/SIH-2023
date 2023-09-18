import React from "react";

const categories = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-10 pt-3 font-bold bg-gray-50 pb-3">
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">ENTERTAINMENT</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">JUDICIARY</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">SCIENCE</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">CRIME</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">POLITICS</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">SPORTS</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">TECHNOLOGY</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">CULTURE</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">INTERNATIONAL</a>
      </div>
    </>
  );
};

export default categories;
