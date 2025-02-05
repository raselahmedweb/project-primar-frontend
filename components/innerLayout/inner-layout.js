"use client";
import DropDownMenu from "@/components/headers/dropdownmeno";
import Header from "@/components/headers/header";
import { useAuth } from "@/components/auth/authprovider";

export default function InnerLayout({ children }) {
  const { dropMenu } = useAuth();

  return (
    <>
      <Header />
      <div className="h-28"></div>
      <div
        className={`bg-black text-white w-full sm:w-80 md:hidden fixed top-20 end-0 p-4 transition-transform duration-500 ease-in-out ${
          dropMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <DropDownMenu />
      </div>
      {children}
    </>
  );
}
