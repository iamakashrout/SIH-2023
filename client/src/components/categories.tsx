import React from "react";

const categories = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-10 pt-3 font-bold bg-gray-50 pb-3">
        <a className = "hover:cursor-pointer" href="#">LIFESTYLE</a>
        <a className = "hover:cursor-pointer" href="#">BUSINESS</a>
        <a className = "hover:cursor-pointer" href="#">SPORTS</a>
        <a className = "hover:cursor-pointer" href="#">FASHION</a>
        <a className = "hover:cursor-pointer" href="#">HEALTH</a>
        <a className = "hover:cursor-pointer" href="#">TECHNOLOGY</a>
        <a className = "hover:cursor-pointer" href="#">TRAVEL</a>
        <a className = "hover:cursor-pointer" href="#">FOOD</a>
        <a className = "hover:cursor-pointer" href="#">CREATIVE</a>
      </div>
    </>
  );
};

export default categories;
