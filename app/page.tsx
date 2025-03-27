import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import MobileNavbar from "./components/MobileNavbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="lg:flex w-[1500px] mx-auto flex-col text-white overflow-hidden">
        <div>
          <Image
            src={"/bg.jpg"}
            alt=""
            fill
            className="-z-50 brightness-30 object-cover"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={"/hero.png"}
            alt=""
            fill
            className="-z-50 object-cover brightness-70"
          />
        </div>
        <div className="lg:hidden">
          <Image
            src={"/m1.png"}
            alt=""
            fill
            className="-z-50 object-cover  brightness-30"
          />
        </div>
        <div className="text-center lg:pl-24 mt-20 px-16 hidden lg:flex">
          <div className="flex text-start space-x-4">
            <AiFillPlayCircle size={40} className="mt-12" />
            <div className="flex flex-col mt-4">
              <h1 className="text-7xl font-extrabold">TJ Monterde</h1>
              <p className="text-lg font-bold">
                Live at The Palladium | Times Square, NY
              </p>
              <p>March 30, 2025</p>
            </div>
          </div>
        </div>
        <div className="pl-24 hidden lg:flex">
          <button className="mt-8 justify-start border py-4 rounded-full font-bold text-lg cursor-pointer bg-red-500 w-1/3">
            SOLD OUT
          </button>
        </div>
        <div className="mt-8 w-[1300px] mx-auto hidden lg:flex">
          <div className="grid grid-cols-4 items-center place-items-center gap-x-16">
            <Image
              src={"/c1.jpg"}
              alt="c1"
              width={200}
              height={200}
              className="object-cover h-100 w-100 border p-8 border-gray-600 rounded-md bg-gray-800/20 backdrop-blur-lg shadow-xs shadow-gray-500"
            />
            <Image
              src={"/c2.jpg"}
              alt="c1"
              width={200}
              height={200}
              className="object-cover h-100 w-100 border p-8 border-gray-600 rounded-md bg-gray-800/20 backdrop-blur-lg shadow-xs shadow-gray-500"
            />
            <Image
              src={"/c3.jpg"}
              alt="c1"
              width={200}
              height={200}
              className="object-cover h-100 w-100 border p-8 border-gray-600 rounded-md bg-gray-800/20 backdrop-blur-lg shadow-xs shadow-gray-500"
            />
            <Image
              src={"/c4.jpg"}
              alt="c1"
              width={200}
              height={200}
              className="object-cover h-100 w-100 border p-8 border-gray-600 rounded-md bg-gray-800/20 backdrop-blur-lg shadow-xs shadow-gray-500"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={120}
            height={120}
            className="object-cover pl-4"
          />
        </Link>
        <div className="px-8 flex flex-col items-start text-white">
          <div className="flex flex-col items-start tracking-tighter">
            <h1 className="text-4xl md:text-7xl font-extrabold">
              We bring you the very best in music.
            </h1>
            <p className="text-gray-400 mt-2 mb-4 md:mb-18 text-lg md:text-3xl font-bold">
              Live and unforgettable.
            </p>
          </div>
          <h2 className="font-bold text-xl">Next Event</h2>
          <div className="flex flex-col">
            <div className="border-gray-800 border rounded-2xl mt-2 bg-gray-800/10 backdrop-blur-md md:grid md:grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <Image
                  src={"/c3.jpg"}
                  alt="logo"
                  width={400}
                  height={400}
                  className="object-cover h-full rounded-l-2xl w-[100px] md:w-[200px]"
                />
                <div className="flex flex-col md:text-start px-4 m-0 col-span-2 mt-8">
                  <h1 className="md:text-4xl text-lg font-extrabold">
                    TJ MONTERDE
                  </h1>
                  <p className="text-sm font-bold md:whitespace-nowrap">
                    Live at The Palladium | Times Square, NY
                  </p>
                  <p className="text-sm font-bold">March 30, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 flex flex-col items-start mt-4 text-white">
          <h1 className="font-bold text-xl">Upcoming</h1>
          <div className="flex flex-col w-full">
            <div className="border-gray-800 border rounded-2xl mt-2 bg-gray-800/10 backdrop-blur-md md:grid md:grid-cols-2">
              <div className="grid grid-cols-3 place-items-start">
                <Image
                  src={"/d.png"}
                  alt="logo"
                  width={400}
                  height={400}
                  className="object-cover rounded-l-2xl w-[100px] md:w-[200px] md:h-[150px] h-auto"
                />
                <div className="flex flex-col md:text-start px-4 m-0 col-span-2 mt-8">
                  <h1 className="md:text-4xl text-lg font-extrabold">
                    DIONELA
                  </h1>
                  <p className="text-sm font-bold md:whitespace-nowrap">
                    New York, NY
                  </p>
                  <p className="text-xs font-bold">June 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky md:absolute bottom-0 w-screen flex items-center justify-center text-center bg-gray-800/20 backdrop-blur-lg py-8 lg:hidden my-4 md:rounded-lg rounded-full shadow-xs shadow-gray-500">
        <MobileNavbar />
      </div>
    </>
  );
}
