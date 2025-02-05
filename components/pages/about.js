"use client";
import Container from "@/components/pages/container";
import Image from "next/image";

import aboutImg from "@/components/images/about.jpg";
import { useEffect, useState } from "react";
import apiReq from "../api/axios";

export default function About() {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchPartners = async () => {
        try {
          const res = await apiReq({
            endPoint: "info",
            method: "get",
          });
          setInfos(res?.data?.info);
        } catch (err) {
          console.error("Error fetching partners:", err.message);
        }
      };

      fetchPartners();
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container id="about">
      <div className="flex-row md:flex justify-center md:justify-between space-y-5 md:space-y-0 space-x-0 md:space-x-5">
        <div className="flex flex-col justify-between rounded-xl shadow p-5 w-full md:w-1/2 bg-blue-700 bg-opacity-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline">
              About Us
            </h1>
          </div>

          <div>
            <p className="text-white text-l md:text-lg font-semibold">
              <b>Advantage Venture</b> is a leading crypto consulting company
              offering end-to-end solutions to drive blockchain projects from
              concept to success. We specialize in providing essential services
              that empower projects to thrive in the competitive cryptocurrency
              landscape.
              <br />
              <br />
              Our expertise in fundraising ensures that projects secure the
              financial resources needed to grow. Through seed funding, private
              rounds, and OTC (over-the-counter) deals, we connect projects with
              a network of investors, enabling them to raise capital efficiently
              and strategically.
              <br />
              <br />
              We also excel in marketing by utilizing the influence of Key
              Opinion Leaders (KOLs) and fostering active engagement through
              community calls. These efforts help projects build visibility,
              credibility, and a strong community presence, creating the
              foundation for long-term success.
              <br />
              <br />
              Additionally, <b>Advantage Venture </b>
              offers Tier-1 CEX listing services to enhance projects global
              reach and liquidity. We simplify the process of listing on top
              exchanges like Binance, kucoin ,bybit providing the exposure
              necessary to gain trust and attract investors worldwide.
              <br />
              <br />
              Whether you’re a startup or an established blockchain project,{" "}
              <b>Advantage Venture</b> delivers customized solutions tailored to
              your needs. From securing capital to creating impactful marketing
              campaigns and achieving top-tier exchange listings, we are your
              trusted partner in navigating the crypto ecosystem.
            </p>
          </div>
        </div>
        <div className="flex-row space-y-5 w-full md:w-1/2">
          <div className="relative group p-1 duration-300 -z-50">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <Image
              src={aboutImg}
              className="relative z-10 rounded-xl shadow duration-300"
              alt="About our company"
            />
          </div>

          <div className="flex flex-wrap p-5 bg-blue-700 bg-opacity-10 rounded-xl shadow">
            {infos.length &&
              infos.map((inf, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 text-center sm:text-start p-1"
                  >
                    <div className="bg-black text-white rounded-xl p-3 duration-300 border-4 border-black hover:border-red-600">
                      <span className="text-3xl font-bold mb-2 block">
                        {inf.infoDate}
                      </span>
                      <span className="text-gray-500 block">{inf.info}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Container>
  );
}
