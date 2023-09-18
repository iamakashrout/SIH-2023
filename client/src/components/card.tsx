import React from "react";
import style from "../styles/card.module.css";
import Image from "next/image";
const card = (props : any) => {
  return (
    <div className="flex justify-center items-center hover:scale-[1.01] duration-300 hover:cursor-pointer">
      <div className={style.card}>
        <div className={style.card_header}>
          <Image
            src= {props.url}
            width={400}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className={style.card_content}>
          <h3 className="flex justify-center" id="news-title">
            News Title
          </h3>
          <h6 className={style.news_source} id="news-source">
            AAJ TAK - Uploaded on 18 Sept,2023
          </h6>
          <p id="news-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            saepe quis voluptatum quisquam vitae doloremque facilis molestias
            quae ratione cumque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default card;
