"use client";
import Link from "next/link";
import { useAuth } from "@/components/auth/authprovider";
import { useState } from "react";
import IconClose from "../icons/icon-close";
import { usePathname } from "next/navigation";

export default function DropDownMenu() {
  const { setDropMenu } = useAuth();
  const pathname = usePathname();
  const [path, setPath] = useState(pathname);
  const menuClass = (p) => {
    return path == p
      ? "flex text-red-600 font-bold"
      : "";
  };

  return (
    <div className="z-50 relative">
      <button
        onClick={() => setDropMenu((prev) => !prev)}
        className="md:hidden w-6 absolute top-1 end-1"
      >
        <span className="min-w-full text-red-600">
          <IconClose />
        </span>
      </button>
      <ul className="flex-row justify-end pt-4 items-center space-y-8">
        <li className={menuClass("/")}>
          <Link href="/" onClick={()=>{setPath("/");setDropMenu((prev) => !prev)}}>Home</Link>
        </li>
        <li className={menuClass("/#about")}>
          <Link href="/#about" onClick={()=>{setPath("/#about");setDropMenu((prev) => !prev)}}>About</Link>
        </li>
        <li className={menuClass("/#team")}>
          <Link href="/#team" onClick={()=>{setPath("/#team");setDropMenu((prev) => !prev)}}>Team</Link>
        </li>
        <li className={menuClass("/#partner")}>
          <Link href="/#partner" onClick={()=>{setPath("/#partner");setDropMenu((prev) => !prev)}}>Partnership</Link>
        </li>
        <li className={menuClass("/#verifiedScout")}>
          <Link href="/#verifiedScout" onClick={()=>{setPath("/#verifiedScout");setDropMenu((prev) => !prev)}}>Scout verification</Link>
        </li>
        <li className={menuClass("/blog")}>
          <Link href="/blog" onClick={()=>{setPath("/blog");setDropMenu((prev) => !prev)}}>Blog</Link>
        </li>
        <li className={menuClass("/#contact")}>
          <Link href="/#contact" onClick={()=>{setPath("/#contact");setDropMenu((prev) => !prev)}}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
