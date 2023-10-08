import React from "react";

const categories = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-20 pt-3 font-bold bg-gray-50 pb-3 pl-5 pr-5">
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">External Affairs
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Law and Justice
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Youth Affairs and Sports
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Finance
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Internal Security
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Culture
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Information and Broadcasting
        </a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Home Affairs</a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Science and Technology</a>
        <a className = "hover:cursor-pointer hover:scale-[1.2] duration-300" href="#">Electronics and Information Technology
        </a>
      </div>
    </>
  );
};

export default categories;
