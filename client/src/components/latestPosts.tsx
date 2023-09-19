import React, {useState, useEffect} from "react";
import Card from "../components/card";
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
      {newsData?.length>0 ? (
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
          imgUrl={news["URL"]}
          Title={news["Title"]}
          categories={news["Categories"]}
          description = {news["Description"]}
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
          <div>Loading...</div>
      )}
    </>
  );
};


export default latestPosts;

// heading, body, catgeory, url