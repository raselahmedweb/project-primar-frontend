"use client";

import Container from "@/components/pages/container";
import IconVarified from "@/components/icons/icon-varified";
import { useState } from "react";
import IconClose from "../icons/icon-close";
import apiReq from "../api/axios";
export default function VarifiedScout() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isVarified, setIsVarified] = useState();
  const [result, setResult] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleVarification = () => {
    if (username.trim().length !== 0) {
      apiReq({
        endPoint: "scout/single",
        method: "post",
        data: { username },
        CT: "application/json",
      })
        .then((res) => {
          setIsVarified(res?.data?.status);
          setName(res?.data?.scout.name);
          setUsername("");
        })
        .catch((err) => {
          setName(username);
          setIsVarified(err.data?.status);
        })
        .finally(() => setResult("show result"));
    }
  };
  return (
    <Container id="verifiedScout">
      <div className="flex-row space-y-5 bg-gray-700 bg-opacity-35 rounded-xl shadow p-5 md:p-5">
        <div className="mb-5 text-center">
        <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
            Scouts Verification
            </h3>
          </div>
          
          <div className="my-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          <p className="text-gray-200">
            Write telegram{" "}
            <span className="text-yellow-500 font-bold">@username</span> for scouts verification
          </p>
        </div>

        <div className="flex flex-col space-y-5 m-auto md:w-1/2 overflow-hidden">
          {result == "" && (
            <div className="overflow-hidden rounded-xl bg-blue-600 bg-opacity-10 p-5 shadow">
              <div className="flex overflow-hidden rounded-md bg-gray-200 focus:outline focus:outline-blue-500">
                <input
                  onChange={handleUsernameChange}
                  type="text"
                  placeholder="Search @username"
                  className="w-full rounded-bl-md rounded-tl-md bg-gray-100 px-4 py-2.5 text-gray-700 focus:outline-blue-500"
                  required
                />
                <button
                  onClick={() => handleVarification()}
                  className="bg-blue-500 px-3.5 text-white duration-150 hover:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          {isVarified && result == "show result" && (
            <div className="mt-8 flex flex-col rounded-sm max-w-96 mx-auto bg-gray-100 text-black shadow">
              <div className="flex justify-center items-center overflow-hidden p-3 -mt-6 md:-mt-8 mx-auto w-12 h-12 md:w-16 md:h-16 shadow-xl rounded-full bg-blue-400 text-white">
                <IconVarified />
              </div>
              <h4 className="text-center text-black text-2xl m-0 p-0 my-4">{name}</h4>
              <div className="border-t flex flex-col space-y-2 items-center justify-center pt-8 p-5">
                <h4 className="text-center text-2xl">Verified Scout</h4>
                <p className="text-center text-black">
                  Advantage Venture will reach out if additional details are
                  required.
                </p>
                <button
                  onClick={() => {
                    setResult("");
                    setUsername("");
                  }}
                  className="w-full rounded text-center border py-2 border-gray-400 text-lg"
                >
                  Go back to Verification
                </button>
              </div>
            </div>
          )}
          {!isVarified && result == "show result" && (
            <div className="mt-8 flex flex-col rounded-sm max-w-96 mx-auto bg-gray-100 shadow">
              <div className="flex justify-center items-center overflow-hidden p-3 -mt-6 md:-mt-8 mx-auto w-12 h-12 md:w-16 md:h-16 shadow-xl rounded-full bg-red-400 text-white">
                <IconClose />
              </div>
              <h4 className="text-center text-2xl m-0 text-black p-0 my-4">{name}</h4>
              <div className="border-t flex flex-col space-y-2 items-center justify-center pt-8 p-5">
                <h4 className="text-center text-2xl text-black">Not Verified</h4>
                <p className="text-center text-gray-700">
                  Advantage Venture will reach out if additional details are
                  required.
                </p>
                <button
                  onClick={() => {
                    setResult("");
                    setUsername("");
                  }}
                  className="w-full rounded text-center border py-2 text-black border-gray-400 text-lg"
                >
                  Go back to Verification
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
