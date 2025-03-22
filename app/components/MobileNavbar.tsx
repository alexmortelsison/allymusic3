import { AiTwotoneMail } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { SlEvent } from "react-icons/sl";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
export default function MobileNavbar() {
  const mobileLinks = [
    {
      name: "home",
      href: "/",
      icon: <HiHome size={30} />,
    },
    {
      name: "Upcoming",
      href: "/upcoming",
      icon: <SlEvent size={30} />,
    },
    {
      name: "About",
      href: "/about",
      icon: <HiInformationCircle size={30} />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <AiTwotoneMail size={30} />,
    },
  ];

  return (
    <div className="">
      <div className="space-x-8 md:space-x-24 flex">
        {mobileLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-gray-400">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
