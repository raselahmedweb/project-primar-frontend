"use client";
import Container from "@/components/pages/container";
import IconTelegram from "../icons/icon-telegram";
import IconFacebook from "../icons/icon-facebook";
import IconTwitter from "../icons/icon-twitter";
import { useState } from "react";
import apiReq from "../api/axios";
import Link from "next/link";

export default function Contact() {
  const [interest, setInterest] = useState("Marketing");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectSocial, setProjectSocial] = useState("");

  const [statusMsg, setStatusMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleProjectSocialChange = (e) => {
    setProjectSocial(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      interest === "" ||
      name === "" ||
      projectSocial === "" ||
      email === "" ||
      message === ""
    ) {
      setStatusMsg("Please fill in all fields.");
      return;
    } else {
      setIsLoading(true);
      apiReq({
        endPoint: "contact",
        method: "post",
        data: {
          interest,
          name,
          projectSocial,
          emailUser: email,
          message,
        },
        CT: "application/json",
      })
        .then((res) => {
          setStatusMsg(res.data.message);
          setStatus(res.data.status);
          // Clear input fields after successful submission
          if (res.data.status) {
            setName("");
            setEmail("");
            setMessage("");
            setProjectSocial("");
            setInterest("Marketing"); // Reset to the default value if necessary
          }
        })
        .catch((err) => {
          setStatusMsg(err.response?.data?.message);
          setStatus(false);
        })
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <Container id="contact">
      <div className="mx-auto bg-green-400 rounded-xl shadow-lg">
        <div className="flex-row w-full md:w-4/6 lg:w-1/2 m-auto items-center justify-center gap-5 lg:gap-14 sm:p-8 p-4">
          <div className="text-center mb-5">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline">
              Get in Touch
            </h1>
            <p className="text-sm text-gray-200 leading-relaxed">
              Have some big idea or brand to develop and need help? Then reach
              out we&apos;d love to hear about your project and provide help.
            </p>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-lg">
            <p className="text-sm font-semibold text-gray-800">
              I&apos;m interested in...
            </p>

            <div className="space-y-2 md:space-y-4 max-lg:mt-4">
              <button
                onClick={() => setInterest("Marketing")}
                type="button"
                className={`w-full block md:w-auto md:inline px-3 py-1 md:px-4 md:py-2 rounded md:rounded-lg text-sm tracking-wider font-medium outline-none border-2 border-green-600 mr-4 ${
                  interest === "Marketing"
                    ? "bg-green-600 text-white"
                    : "bg-transparent text-gray-800"
                }`}
              >
                Marketing
              </button>
              <button
                onClick={() => setInterest("Fund Raising")}
                type="button"
                className={`w-full block md:w-auto md:inline px-3 py-1 md:px-4 md:py-2 rounded md:rounded-lg text-sm tracking-wider font-medium outline-none border-2 border-green-600 mr-4 ${
                  interest === "Fund Raising"
                    ? "bg-green-600 text-white"
                    : "bg-transparent text-gray-800"
                }`}
              >
                Fund Raising
              </button>
              <button
                onClick={() => setInterest("Cex Listing")}
                type="button"
                className={`w-full block md:w-auto md:inline px-3 py-1 md:px-4 md:py-2 rounded md:rounded-lg text-sm tracking-wider font-medium outline-none border-2 border-green-600 mr-4 ${
                  interest === "Cex Listing"
                    ? "bg-green-600 text-white"
                    : "bg-transparent text-gray-800"
                }`}
              >
                Cex Listing
              </button>
            </div>

            <form className="mt-4 space-y-2 md:space-y-4" onSubmit={handleSubmit}>
              <input
                onChange={handleNameChange}
                type="text"
                placeholder="Name"
                className="bg-gray-100 w-full rounded-lg px-2 py-2 md:px-4 md:py-3 text-gray-800 text-sm outline-green-600"
              />
              <input
                onChange={handleEmailChange}
                type="email"
                placeholder="Email"
                className="bg-gray-100 w-full rounded-lg px-2 py-2 md:px-4 md:py-3 text-gray-800 text-sm outline-green-600"
              />
              <input
                onChange={handleProjectSocialChange}
                type="text"
                placeholder="Project Social"
                className="bg-gray-100 w-full rounded-lg px-2 py-2 md:px-4 md:py-3 text-gray-800 text-sm outline-green-600"
              />
              <textarea
                onChange={handleMessageChange}
                placeholder="Message"
                rows="5"
                className="bg-gray-100 w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-green-600"
              ></textarea>
              {statusMsg && (
                <div
                  className={`text-black ${
                    status
                      ? "bg-green-200 px-2 py-2 md:px-4 md:py-3 rounded"
                      : "bg-red-200 px-2 py-2 md:px-4 md:py-3 rounded"
                  }`}
                >
                  <span>{statusMsg}</span>
                </div>
              )}
              <button className="text-white bg-green-600 hover:bg-green-800 tracking-wide rounded-lg text-sm px-2 py-2 md:px-4 md:py-3 flex items-center justify-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                {isLoading ? "Sending message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
