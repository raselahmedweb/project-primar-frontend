"use client";
import Container from "@/components/pages/container";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import apiReq from "../api/axios";
import { useAuth } from "../auth/authprovider";

export default function Partners() {
  const {dropMenu} = useAuth();
  const [CexProjectPartners, setCexProjectPartners] = useState([]);
  const [KolsCallsPartners, setKolsCallsPartners] = useState([]);
  const cexSliderRef = useRef(null);
  const kolsSliderRef = useRef(null);

  useEffect(() => {
    apiReq({
      endPoint: `partners/Cex & Project`,
      method: "get",
    })
      .then((res) => {
        setCexProjectPartners(res?.data?.partners || []);
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    apiReq({
      endPoint: `partners/Kols & Calls`,
      method: "get",
    })
      .then((res) => {
        setKolsCallsPartners(res?.data?.partners || []);
      })
      .catch((err) => console.error(err.message));
  }, []);

useEffect(() => {
  const smoothScroll = (slider, speed, direction) => {
    if (!slider) return;

    let animationId;
    let isTouching = false;
    let startX = 0;
    let scrollLeft = 0;

    const cloneContent = () => {
      const content = slider.innerHTML;
      slider.innerHTML += content; // Duplicate the content
    };

    const scroll = () => {
      if (!isTouching) {
        if (direction === "left") {
          slider.scrollLeft += speed;
          if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0; // Reset to the beginning
          }
        } else if (direction === "right") {
          slider.scrollLeft -= speed;
          if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2; // Reset to the end
          }
        }
        animationId = requestAnimationFrame(scroll);
      }
    };

    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => scroll();

    const handleTouchStart = (e) => {
      isTouching = true;
      pauseScroll(); // Stop animation when touch starts
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isTouching) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // Adjust multiplier for sensitivity
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      resumeScroll(); // Resume animation after touch ends
    };

    cloneContent(); // Duplicate content for seamless scrolling
    scroll();

    // Add event listeners for touch interaction
    slider.addEventListener("mouseenter", pauseScroll);
    slider.addEventListener("mouseleave", resumeScroll);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId); // Cleanup animation
      slider.removeEventListener("mouseenter", pauseScroll);
      slider.removeEventListener("mouseleave", resumeScroll);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  };

  const cexSlider = cexSliderRef.current;
  const kolsSlider = kolsSliderRef.current;

  const cexCleanup = smoothScroll(cexSlider, 1, "left"); // Cex moves left
  const kolsCleanup = smoothScroll(kolsSlider, 0.5, "right"); // Kols moves right

  return () => {
    cexCleanup?.();
    kolsCleanup?.();
  };
}, [CexProjectPartners, KolsCallsPartners]);



  return (
    <Container id="partner">
      <div className="flex-row space-y-16 bg-gray-500 bg-opacity-25 rounded-xl shadow py-5 md:p-5">
        {/* Cex & Project Partners */}
        <div>
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
              Partnership with Cex & Project
            </h3>
          </div>
          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          <div
            ref={cexSliderRef}
            className="flex items-center space-x-3 mt-5 overflow-hidden"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {CexProjectPartners.map((partner, index) => (
               <div
    key={index}
    className="flex justify-center items-center flex-shrink-0 overflow-hidden bg-black p-[2%] md:p-[1%] rounded-tr sm:rounded-tr-md md:rounded-tr-lg lg:rounded-tr-xl rounded-bl sm:rounded-bl-md md:rounded-bl-lg lg:rounded-bl-xl"
  >
    <div
      className={`p-2 w-16 h-[72px] md:w-24 md:h-[108px] relative ${
        dropMenu && "-z-50"
      }`}
    >
      <Image
        className="rounded object-contain transition-transform duration-500 ease-out"
        src={partner.photo}
        alt="Profile"
        fill
        loading="lazy"
      />
    </div>
  </div>
            ))}
          </div>
        </div>

        {/* Kols & Calls Partners */}
        <div>
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
              Partnership with Kols & Calls
            </h3>
          </div>
          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
          <div
            ref={kolsSliderRef}
            className="flex items-center space-x-3 mt-5 overflow-hidden"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            {KolsCallsPartners.map((partner, index) => (
               <div
    key={index}
    className="flex justify-center items-center flex-shrink-0 overflow-hidden bg-black p-[2%] md:p-[1%] rounded-tr sm:rounded-tr-md md:rounded-tr-lg lg:rounded-tr-xl rounded-bl sm:rounded-bl-md md:rounded-bl-lg lg:rounded-bl-xl"
  >
    <div
      className={`p-2 w-16 h-[72px] md:w-24 md:h-[108px] relative ${
        dropMenu && "-z-50"
      }`}
    >
      <Image
        className="rounded object-contain transition-transform duration-500 ease-out"
        src={partner.photo}
        alt="Profile"
        fill
        loading="lazy"
      />
    </div>
  </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
