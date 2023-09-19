import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
// import Crime from "../../publiccategories/images/crime.jpg"
// import Culture from "../../public/categories/images/culture.jpg"
// import Entertainment from "../../public/categories/images/entertainment.jpg"
// import International from "../../public/categories/images/international.jpg"
// import Judiciary from "../../public/categories/images/judiciary.jpg"
// import Politics from "../../public/categories/images/politics3.jpg"
// import Science from "../../public/categories/images/science.jpg"
// import Sports from "../../public/categories/images/sports.jpg"
// import Technology from "../../public/categories/images/technology.jpg"

const card = (props: any) => {
  return (
    <div className="flex justify-center items-center hover:scale-[1.01] duration-300 hover:cursor-pointer">
      <div className={style.card}>
        <div className={style.card_header}>
          <Image
            src={`/categories/images/${props.imgUrl}.jpg`}
            width={400}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className={style.card_content}>
          <h3 className="flex justify-center" id="news-title">
            {props.Title}
          </h3>
          <h6 className={style.news_source} id="news-source">
            {props.categories}
          </h6>
          <p id="news-desc">{props.description}</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col justify-center items-center">
            Positive %<div>{props.positive}%</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            Negative %<div>{props.negative}%</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            Neutral %<div>{props.neutral}%</div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-3">
          <button className="text-lg hover:underline hover:scale-[1.01] duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
