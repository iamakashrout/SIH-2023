import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "../components/header"
import Categories from '@/components/categories'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Categories/>
    </>
  );
}
