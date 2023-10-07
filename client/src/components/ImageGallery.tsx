// import React from 'react';

// const ImageGallery = () => {
//   const imagesWithCaptions = [
//     { imagePath: 'https://source.unsplash.com/Bd7gNnWJBkU', caption: 'Technology' },
//     { imagePath: "https://source.unsplash.com/OgqWLzWRSaI", caption: 'Sports' },
//     { imagePath: "https://source.unsplash.com/KDBmLUFxHP8", caption: 'Food' },
//     { imagePath: "https://source.unsplash.com/NTyBbu66_SI", caption: 'Health' },
//   ];

//   return (
//     <div className="flex hover:cursor-pointer">
//       {imagesWithCaptions.map((item, index) => (
//         <div
//           key={index}
//           className="flex-none "
//           style={{ width: '25vw', minHeight: '200px' }} 
//         >
//           <img
//             src={item.imagePath}
//             alt={`Image ${index + 1}`}
//             className="w-full h-[450px] hover:scale-[1.01] duration-300"
//           />
//           <p className="text-center font-bold mt-2 uppercase">{item.caption}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;



import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const ImageGallery = () => {
  //Array of Images
  const images = [
    "https://source.unsplash.com/m_-8_AhhJjE",
    "https://source.unsplash.com/wdTpPg4ukd8",
    "https://source.unsplash.com/Bd7gNnWJBkU",
    "https://source.unsplash.com/F2qh3yjz6Jk",
    "https://source.unsplash.com/D6Tu_L3chLE",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
      </div>
    ),
  };
  return (
    <div className="w-full h-[70vh]">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-screen h-[70vh] relative"
          >
            <img className="w-screen opacity-80" src={each} />
            <h1 className="absolute md:top-60 top-24 -mt-4 inset-x-1/4 text-center z-10 md:text-6xl text-6xl bold text-white font-bold uppercase">
            Welcome To News Analysis
            </h1>
            {/* <p className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-3xl bold text-white font-bold uppercase">
                Welcome To News Analysis
            </p> */}
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageGallery;
