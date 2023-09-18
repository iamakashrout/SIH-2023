import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Categories from "@/components/categories";
import LatestPosts from "@/components/latestPosts";
import Card from "@/components/card";
const inter = Inter({ subsets: ["latin"] });
import ImageGallery from '@/components/ImageCarousel'

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <ImageGallery/>
      <div className="m-4 p-2"> 
    </div>
      <LatestPosts />
    </>
  );
}
