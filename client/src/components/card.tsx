import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
const card = (props : any) => {
  return (
    <div className="flex justify-center items-center hover:scale-[1.01] duration-300 hover:cursor-pointer">
      <div className={style.card}>
        <div className={style.card_header}>
          <Image
            src= {props.imgUrl}
            width={400}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className={style.card_content}>
          <h3 className="flex justify-center" id="news-title">
            {props.heading}
          </h3>
          <h6 className={style.news_source} id="news-source">
            {props.category}
          </h6>
          <p id="news-desc">
            {props.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
