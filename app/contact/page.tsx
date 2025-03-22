import { BsFacebook } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import Image from "next/image";
import MobileNavbar from "../components/MobileNavbar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { FaXTwitter } from "react-icons/fa6";
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
        <div className="mt-16 lg:mt-8 max-w-7xl mx-auto h-[700px] lg:h-[700px] w-[80%] lg:w-[70%] bg-gray-800/20 backdrop-blur-md rounded-2xl">
          <div className="lg:grid grid-cols-2 p-8">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
              <Image src={"/logo.png"} alt="logo" width={200} height={200} />
              <div className="hidden lg:flex items-center space-x-4">
                <AiFillMail size={40} />
                <p>info@allygroupnyc.com</p>
              </div>
              <div className="hidden lg:flex items-center space-x-4 mt-4">
                <BiHeadphone size={40} />
                <p>917-239-2468</p>
              </div>
              <div className="hidden lg:flex items-center space-x-4 mt-8">
                <a
                  href="https://www.instagram.com/officialallymusic/"
                  target="_blank"
                >
                  <Image src={"/ig.ico"} alt="ig" width={25} height={25} />
                </a>
                <a
                  href="https://www.instagram.com/officialallymusic/"
                  target="_blank"
                >
                  <BsFacebook size={23} />
                </a>
                <a
                  href="https://www.instagram.com/officialallymusic/"
                  target="_blank"
                >
                  <FaXTwitter size={23} />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-sm lg:text-lg lg:my-8">
                Thank you for your patronage. Please fill out the form below
                <span className="hidden lg:inline-flex">or email us</span> and
                we will get back to you regarding your inquiry.
              </h1>
              <Separator className="lg:mb-12 my-4" />
              <Input type="text" placeholder="First Name" className="mb-4" />
              <Input type="text" placeholder="Last Name" className="mb-4" />
              <Input type="text" placeholder="Email" className="mb-4" />
              <Textarea placeholder="Message" className="lg:mb-8 mb-2" />
              <button className=" bg-pink-500 py-4 w-full rounded-2xl cursor-pointer hover:bg-pink-500/90">
                Send Message
              </button>
              <p className="text-sm text-gray-600 text-center lg:mt-4 mt-2">
                Ally Music does not sell, share or trade customer information.
                Your privacy is very importants to us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-screen flex items-center justify-center text-center bg-gray-800/20 backdrop-blur-lg py-8 lg:hidden my-4 md:rounded-lg rounded-full shadow-xs shadow-gray-500">
        <MobileNavbar />
      </div>
    </>
  );
}
