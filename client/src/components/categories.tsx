import React from "react";

const categories = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-10 pt-3 font-bold bg-gray-50 pb-3">
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">LIFESTYLE</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">BUSINESS</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">SPORTS</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">FASHION</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">HEALTH</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">TECHNOLOGY</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">TRAVEL</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">FOOD</a>
        <a className = "hover:cursor-pointer hover:scale-[1.02] duration-300" href="#">CREATIVE</a>
      </div>
    </>
  );
};

export default categories;
