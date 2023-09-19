import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Crime from "../../public/categories/images/crime.jpg"
import Culture from "../../public/categories/images/culture.jpg"
import Entertainment from "../../public/categories/images/entertainment.jpg"
import International from "../../public/categories/images/international.jpg"
import Judiciary from "../../public/categories/images/judiciary.jpg"
import Politics from "../../public/categories/images/politics3.jpg"
import Science from "../../public/categories/images/science.jpg"
import Sports from "../../public/categories/images/sports.jpg"
import Technology from "../../public/categories/images/technology.jpg"

const latestPosts = () => {
  const [newsData, setNewsData] = useState([]);
  const apiUrl = "http://127.0.0.1:8000/";
  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNewsData(data["News"]))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); // The empty array means this effect runs once after initial render

  return (
    <>
      {newsData?.length > 0 ? (
        <>
          <div className="flex justify-center items-center text-3xl font-bold m-6 libre">
            LATEST POSTS
          </div>
          <hr className="mb-3" />
          {/* <div className="flex justify-center items-center space-x-8">

        <Card imgUrl="https://source.unsplash.com/NyA2B7xovMw" />
        <Card url="https://source.unsplash.com/2seMu5EqCDw" />
        <Card url="https://source.unsplash.com/cHvT5F8cW50" />
      </div> */}
          <div className="grid grid-cols-3 gap-4">
            {newsData?.map((news) => (
              <Card
                imgUrl={news["Categories"]}
                Title={news["Title"]}
                categories={news["Categories"]}
                description={news["Description"]}
                positive = {news["Sentiment_Score"].split(' ')[0]}
                negative = {news["Sentiment_Score"].split(' ')[1]}
                neutral={news["Sentiment_Score"].split(' ')[2]}
                url={news["URL"]}
              />
            ))}
          </div>
          {/* <div className="flex justify-center items-center space-x-8">
        <Card url="https://source.unsplash.com/KlxgXmqoTJ8" />
        <Card url="https://source.unsplash.com/e4iPsCsMDrA" />
        <Card url="https://source.unsplash.com/Mm8USYeFvt8" />
      </div> */}
        </>
      ) : (
        <>
          <div className="flex justify-center items-center text-3xl font-bold m-6 libre">
            LATEST POSTS
          </div>
          <hr className="mb-3" />
          <div className="flex justify-center items-center text-2xl">
            Latest Posts are Loading...
          </div>
          {/* <div className="flex justify-center items-center space-x-8">
            <Card imgUrl="https://source.unsplash.com/NyA2B7xovMw" />
            <Card imgUrl="https://source.unsplash.com/2seMu5EqCDw" />
            <Card imgUrl="https://source.unsplash.com/cHvT5F8cW50" />
          </div> */}
        </>
      )}
    </>
  );
};

export default latestPosts;

// heading, body, catgeory, url
