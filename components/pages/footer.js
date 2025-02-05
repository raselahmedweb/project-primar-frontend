"use client";
import Link from "next/link";
import IconFacebook from "../icons/icon-facebook";
import IconTelegram from "../icons/icon-telegram";
import IconTwitter from "../icons/icon-twitter";
import { useAuth } from "../auth/authprovider";

export default function Footer() {
    const {dropMenu} = useAuth();

  // WhatsApp info
  const phoneNumber = "8615616256736"; // Ensure this includes the country code without '+'
  const message = encodeURIComponent("Hello");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <footer className={`relative m-auto mt-4 md:mt-10 px-2 md:px-10 ${dropMenu&&"-z-50"}`}>
      <div className="bg-blue-600 bg-opacity-20 text-white shadow-xl p-5 rounded-xl">
        {/* Social Media Section */}
        <div className="mx-auto text-start md:container flex flex-wrap justify-between pb-5">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              Follow Us On
            </h4>
            <div className="flex items-center justify-start my-3">
              <Link
                href="https://t.me/advantageventure"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full hover:border-[#0088CC] border-stroke bg-white text-black hover:text-[#0088CC] transition duration-300"
              >
                <IconTelegram />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full hover:border-[#1877F2] border-stroke bg-black text-white hover:bg-[#1877F2] transition duration-300"
              >
                <IconFacebook />
              </Link>
              <Link
                href="https://x.com/AdvantageVentur?t=0RwX_ugOavkSBYkYPAr1ow&s=35"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 mr-3 border rounded-full hover:border-[#1DA1F2] border-stroke bg-black text-white hover:bg-[#1DA1F2] transition duration-300"
              >
                <IconTwitter />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
              Contact With Us
            </h4>
            <ul className="mt-3 space-y-4">
              {/* Email */}
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  />
                </svg>
                <Link
                  href="mailto:infoadvantageventure@gmail.com"
                  className="ml-4 text-sm text-white"
                >
                  infoadvantageventure@gmail.com
                </Link>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#fff"
                    viewBox="0 0 482.6 482.6"
                  >
                    <path
                      d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7z"
                    />
                  </svg>
                  <span className="ml-4">{phoneNumber}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-green-300 pt-5">
          <p className="text-base">
            &copy; 2024{" "}
            <span className="font-semibold text-orange-400 cursor-pointer">
              Advantage Venture
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
