import React from "react";
import Card from "../components/card";
const latestPosts = () => {
  return (
    <>
      <div className="flex justify-center items-center text-3xl font-bold m-6 libre">
        LATEST POSTS
      </div>
      <hr className="mb-3" />
      <div className="flex justify-center items-center space-x-8">
        <Card url="https://source.unsplash.com/NyA2B7xovMw" />
        <Card url="https://source.unsplash.com/2seMu5EqCDw" />
        <Card url="https://source.unsplash.com/cHvT5F8cW50" />
      </div>
      <div className="flex justify-center items-center space-x-8">
        <Card url="https://source.unsplash.com/KlxgXmqoTJ8" />
        <Card url="https://source.unsplash.com/e4iPsCsMDrA" />
        <Card url="https://source.unsplash.com/Mm8USYeFvt8" />
      </div>
    </>
  );
};

export default latestPosts;
