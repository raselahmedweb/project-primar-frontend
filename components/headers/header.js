"use client";

import { useState } from "react";
import Link from "next/link";

//media
import logo from "@/public/logo.png";

import IconToggler2 from "../icons/IconToggler2";
import { useAuth } from "../auth/authprovider";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const { setDropMenu } = useAuth();
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  const menuClass = (p) => {
    return path==p
      ? "flex text-red-600 justify-center items-center font-bold"
      : "";
  };
  return (
    <header
      className="fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out"
    >
      <nav className="bg-black text-white border-gray-200 m-auto px-2 md:px-10 py-6">
        <div className="flex flex-wrap justify-between items-center m-auto">
          <div className="flex justify-start items-center lg:w-3/12">
            <Link href="/" className="flex" onClick={()=>setPath("/")}>
              <Image src={logo} className="w-32" alt="FlowBite Logo" />
            </Link>
          </div>
          <div className="hidden md:inline">
            <ul className="flex justify-end items-center space-x-5">
              <li className={menuClass("/")}>
                <Link href="/" onClick={()=>setPath("/")}>Home</Link>
              </li>
              <li className={menuClass("/#about")}>
                <Link href="/#about" onClick={()=>setPath("/#about")}>About</Link>
              </li>
              <li className={menuClass("/#team")}>
                <Link href="/#team" onClick={()=>setPath("/#team")}>Team</Link>
              </li>
              <li className={menuClass("/#partner")}>
                <Link href="/#partner" onClick={()=>setPath("/#partner")}>Partnership</Link>
              </li>
              <li className={menuClass("/#verifiedScout")}>
                <Link href="/#verifiedScout" onClick={()=>setPath("/#verifiedScout")}>Scout verification</Link>
              </li>
              <li className={menuClass("/blog")}>
                <Link href="/blog" onClick={()=>setPath("/blog")}>Blog</Link>
              </li>
              <li className={menuClass("/#contact")}>
                <Link href="/#contact" onClick={()=>setPath("/#contact")}>Contact</Link>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setDropMenu((prev) => !prev)}
            className="md:hidden w-6"
          >
            <span className="w-full">
              <IconToggler2 />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
