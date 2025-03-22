import Image from "next/image";
import MobileNavbar from "../components/MobileNavbar";
export default function ContactPage() {
  return (
    <>
      <div className="lg:flex lg:w-[1500px] lg:mx-auto flex-col text-white px-2">
        <div>
          <Image
            src={"/bg.jpg"}
            alt=""
            fill
            className="-z-50 brightness-30 object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-screen flex items-center justify-center text-center bg-gray-800/20 backdrop-blur-lg py-8 lg:hidden my-4 md:rounded-lg rounded-full shadow-xs shadow-gray-500">
        <MobileNavbar />
      </div>
    </>
  );
}
