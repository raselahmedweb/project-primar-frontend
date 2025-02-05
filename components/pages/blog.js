"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Container from "./container";

import logo from "../../public/logo.png"
import apiReq from "../api/axios";
import BlogSkeleton from "../skeleton/blog-skeleton";
export default function Blog() {
    const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const intervalId = setInterval(() => {
      apiReq({
        endPoint: "blog",
        method: "get",
      })
        .then((res) => {
          setBlogs(res?.data?.blogs);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container id="blog">
        <div className="flex-row space-y-4 w-full md:w-8/12 lg:w-1/2 mx-auto">
            {blogs.length > 0 ? blogs.map((blog, idx)=>{
                const {name,
                    type,
                    valuation,
                    ticket,
                    contact,
                    notes,
                    category, _id} = blog;
                return(
                    <div key={idx} className="p-3 md:p-5 lg:p-10 rounded bg-slate-950 ">
                <div className="border border-gray-500 p-3 md:p-5 lg:p-10">
                    <div className="flex justify-start items-center space-x-4">
                        <div className="w-32">
                            <Image src={logo} alt="advantage venture" />
                        </div>
                        <div className="h-12 border-s border-gray-200"></div>
                        <div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">Listings</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-end mt-5">
                        <div>
                            <h2 className="text-3xl md:text-4xl text-teal-400 font-bold">Secondary Market</h2>
                            <h3 className="text-xl md:text-2xl text-teal-400 font-bold">AVAILABLE NOW</h3>
                        </div>
                        <div>
                            <button className={`${category=="Sell" ? "bg-red-600":"bg-green-600" }  px-5 py-2 font-bold text-xl`}>{category}</button>
                        </div>
                    </div>
                </div>
                <div className="flex-row space-y-5 mt-10">
                    <div><h4 className="text-2xl md:text-3xl">{name}</h4></div>
                    <div className="bg-slate-900 p-3 rounded">
                        <span className="text-gray-500 block mb-1">Type:</span>
                        <span className="text-2xl md:text-3xl block">{type}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded">
                        <span className="text-gray-500 block mb-1">Valuation:</span>
                        <span className="text-2xl md:text-3xl block">{valuation}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded">
                        <span className="text-gray-500 block mb-1">Minimum Ticket:</span>
                        <span className="text-2xl md:text-3xl block">{ticket}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded">
                        <span className="text-gray-500 block mb-1">Contact Point:</span>
                        <span className="text-2xl md:text-3xl block">{contact}</span>
                    </div>
                    <div className="bg-slate-900 p-3 rounded">
                        <span className="text-gray-500 block mb-1">Notes:</span>
                        <span className="text-2xl md:text-3xl block">{notes}</span>
                    </div>
                </div>
            </div>
                )
            }): isLoading ? (
                <BlogSkeleton/>
            ) : (
                <div className="mx-auto"><h2 className="text-center">No Blog found</h2></div>
            )}
        </div>
    </Container>
  )
}
