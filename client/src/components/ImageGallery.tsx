import React from 'react';

const ImageGallery = () => {
  const imagesWithCaptions = [
    { imagePath: 'https://source.unsplash.com/Bd7gNnWJBkU', caption: 'Technology' },
    { imagePath: "https://source.unsplash.com/OgqWLzWRSaI", caption: 'Sports' },
    { imagePath: "https://source.unsplash.com/KDBmLUFxHP8", caption: 'Food' },
    { imagePath: "https://source.unsplash.com/NTyBbu66_SI", caption: 'Health' },
  ];

  return (
    <div className="flex hover:cursor-pointer">
      {imagesWithCaptions.map((item, index) => (
        <div
          key={index}
          className="flex-none "
          style={{ width: '25vw', minHeight: '200px' }} 
        >
          <img
            src={item.imagePath}
            alt={`Image ${index + 1}`}
            className="w-full h-[450px] hover:scale-[1.01] duration-300"
          />
          <p className="text-center font-bold mt-2 uppercase">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;



