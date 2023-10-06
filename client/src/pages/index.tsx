import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Categories from "@/components/categories";
import LatestPosts from "@/components/latestPosts";
import Card from "@/components/card";
const inter = Inter({ subsets: ["latin"] });
import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <div className="mt-4 mb-4">
        <ImageGallery />
      </div>
     <LatestPosts />
    </>
  );
}
