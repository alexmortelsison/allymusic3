import Image from "next/image";
import { AiOutlineCaretRight } from "react-icons/ai";
import MobileNavbar from "../components/MobileNavbar";
export default function Home() {
  return (
    <>
      <div className="lg:flex w-[1500px] mx-auto flex-col text-white">
        <div>
          <Image
            src={"/m2.png"}
            alt=""
            fill
            className="object-cover lg:hidden"
          />
        </div>
        <div className="flex justify-center pl-44 mt-24 col-span-3">
          <AiOutlineCaretRight />
          <AiOutlineCaretRight />
          <AiOutlineCaretRight />
          <AiOutlineCaretRight />
          <AiOutlineCaretRight />
          <AiOutlineCaretRight />
        </div>
        <video
          src="/mar.mp4"
          loop
          autoPlay={true}
          className="rounded-md w-lg absolute 2xl:bottom-10 lg:bottom-10 lg:right-5 2xl:right-30 hidden lg:block"
        />
        <div>
          <Image
            src={"/di.png"}
            alt=""
            fill
            className="-z-50 object-cover hidden lg:block"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-screen flex items-center justify-center text-center bg-gray-800/20 backdrop-blur-lg py-8 lg:hidden my-4 md:rounded-lg rounded-full shadow-xs shadow-gray-500">
        <MobileNavbar />
      </div>
    </>
  );
}
