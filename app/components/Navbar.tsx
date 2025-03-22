"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks1 = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Upcoming",
    href: "/upcoming",
  },
];
const navLinks2 = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="bg-gray-800/10 backdrop-blur-lg font-sans hidden lg:block ">
      <div className="max-w-7xl mx-auto flex justify-center ">
        <div className="flex max-w-3xl items-center justify-between">
          <div>
            <div className="space-x-4">
              {navLinks1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tracking-tighter ${
                    pathName === link.href
                      ? "text-pink-600 font-bold underline underline-offset-4"
                      : "text-gray-500 hover:underline hover:underline-offset-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="object-cover w-35"
          />
          <div className="flex items-center">
            <div className="space-x-4">
              {navLinks2.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tracking-tighter ${
                    pathName === link.href
                      ? "text-pink-600 font-bold underline underline-offset-4"
                      : "text-gray-500 hover:underline hover:underline-offset-4"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
