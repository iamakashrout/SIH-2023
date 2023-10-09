import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";


const header = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currTime = new Date();
    const target = new Date(currTime.getTime() + 60 * 60000);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="bg-gray-50 py-1">
        <div className="xl:container xl:mx-auto flex items-center sm:flex-row sm:justify-between text-center py-3">
          <img src="/Emblem_of_India.svg" width={40} height={40} alt="" />
          <div className="flex justify-center items-center -mr-10">
            {minutes} : {seconds}
          </div>
          <div className="md:flex-none w-96 order-2 sm:order-1 flex items-center justify-center py-6 sm:py-0">
            <input
              type="text"
              className="input-text"
              placeholder="Search Your Interest..."
            />
            <FontAwesomeIcon
              className="-ml-7 mt-1 hover:cursor-pointer"
              icon={faMagnifyingGlass}
            />
          </div>
          <div className="shrink w-80 sm:order-2 flex justify-center items-center">
            <a className="font-bold uppercase text-[34px]">
              News Analysis
            </a>
          </div>
          <div className="w-96 order-3 flex justify-center items-center">
            <div className="flex gap-6">
              <div className="flex justify-center items-center space-x-12">
                ​​{" "}
                <a className="hover:cursor-pointer hover:scale-[1.02] duration-300">
                  About
                </a>
                ​
                <a href="/" className="hover:cursor-pointer hover:scale-[1.02] duration-300">
                  Refresh
                </a>
              </div>
              <img src="/G20.webp" width={90} height={90} alt="" />
              {/* <a className="mt-1 hover:cursor-pointer hover:scale-[1.02] duration-300">
                <ImFacebook color="#888888" />
              </a>
              <a className="mt-1 hover:cursor-pointer hover:scale-[1.02] duration-300">
                <ImTwitter color="#888888" />
              </a>
              <a className="mt-1 hover:cursor-pointer hover:scale-[1.02] duration-300">
                <ImYoutube color="#888888" />
              </a> */}
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr />
      </header>
    </>
  );
};

export default header;
