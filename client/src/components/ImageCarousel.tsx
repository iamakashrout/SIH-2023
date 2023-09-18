import React from 'react';

const ImageGallery = () => {
  const imagesWithCaptions = [
    { imagePath: './categories/images/Technology2.PNG', caption: 'Technology' },
    { imagePath: "./categories/images/Sports2.PNG", caption: 'Sports' },
    { imagePath: "./categories/images/Food.PNG", caption: 'Food' },
    { imagePath: "./categories/images/Health2.jpg", caption: 'Health' },
  ];

  return (
    <div className="flex">
      {imagesWithCaptions.map((item, index) => (
        <div
          key={index}
          className="flex-none border border-gray-300"
          style={{ width: '25vw', minHeight: '200px' }} 
        >
          <img
            src={item.imagePath}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
          <p className="text-center font-bold">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;



