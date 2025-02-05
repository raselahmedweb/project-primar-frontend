"use client";
import { useEffect, useState } from "react";
import Container from "@/components/pages/container";
import Image from "next/image";
import apiReq from "../api/axios";
import { useAuth } from "../auth/authprovider";
import TeamSkeleton from "../skeleton/team-skeleton";

export default function Team() {
  const {dropMenu} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    setIsLoading(true);
      apiReq({
        endPoint: "team",
        method: "get",
      })
        .then((res) => {
          setTeamMember(res?.data?.team);
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, []);
  

  const [openItems, setOpenItems] = useState({});
  const toggleOpen = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleMouseMove = (e, index) => {
    const image = document.getElementById(`image-${index}`);
    const rect = image.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15; // Adjust sensitivity
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    image.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.1)`;
  };

  const handleMouseLeave = (index) => {
    const image = document.getElementById(`image-${index}`);
    image.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <Container id="team">
      <div className="flex-row space-y-5 bg-green-700 bg-opacity-10 text-white rounded-xl shadow p-5">
        <div>
          <div className="flex justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 inline-block">
              Advantage Team
            </h3>
          </div>
          <div className="mt-3 border-t border-2 border-yellow-400 mx-auto w-24"></div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-5">
          {teamMember.length > 0 ? (
            teamMember.map((member, index) => (
              <div
                key={index}
                className="text-start w-72 md:w-80"
              >
                <div className="rounded shadow-lg">
                  <div
                    id={`image-container-${index}`}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={`relative overflow-hidden w-72 md:w-80 h-56 md:h-64 ${dropMenu&&"-z-50"} `}
                  >
                    <Image
                      id={`image-${index}`}
                      className="rounded object-cover transition-transform duration-500 ease-out"
                      src={member.photo}
                      alt="Profile"
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-3">
                    <div className="space-y-1">
                      <h2 className="text-md md:text-2xl font-bold text-green-500">
                        {member.name}
                      </h2>
                      <p className="text-gray-400 text-sm md:text-lg">
                        {member.title}
                      </p>
                      <p>
                        <span
                          className={`text-sm md:text-base block overflow-hidden transition-all duration-0 ease-in-out ${
                            !openItems[member._id]
                              ? "max-h-[1000px]"
                              : "max-h-0"
                          }`}
                        >
                          {openItems[member._id]
                            ? member.description
                            : typeof window !== "undefined" &&
                              window.innerWidth < 768
                            ? member.description.substring(0, 50)
                            : member.description.substring(0, 100)}
                        </span>
                        <span
                          className={`block overflow-hidden text-sm md:text-base ${
                            openItems[member._id]
                              ? "transition-all duration-1000 ease-in-out max-h-[1000px]"
                              : "max-h-0 transition-all duration-0 ease-in-out text-sm md:text-base"
                          }`}
                        >
                          {member.description}
                        </span>{" "}
                        <button
                          onClick={() => toggleOpen(member._id)}
                          className="text-green-500"
                        >
                          {openItems[member._id] ? "show less" : "read more..."}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : isLoading ? (
            <TeamSkeleton/>
          ): <div className="mx-auto">
          <h1 className="text-center">Team members not found</h1>
        </div>}
        </div>
      </div>
    </Container>
  );
}
