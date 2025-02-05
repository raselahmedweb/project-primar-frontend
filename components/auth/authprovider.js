"use client";
import { createContext, useContext, useEffect, useState } from "react";
import apiReq from "@/components/api/axios";

const context = createContext();

const AuthProvider = ({ children }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [notificationToggler, setNotificationToggler] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [isOtpVarified, setIsOtpVarified] = useState("");
  const [otpVarRequired, setOtpVarRequired] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [skeleton, setSkeleton] = useState(false);
  const [popup, setPopup] = useState("");
  const [dropMenu, setDropMenu] = useState(false);

  useEffect(() => {
    const getUserInfo = () => {
      setSkeleton(true);
      setIsLoading(true);
      
      apiReq({
        endPoint: "",
        method: "get",
      })
        .then((res) => {
          if (res?.data?.otp_var == false && res?.data?.register == true) {
            setOtpVarRequired(true);
          }
          if (
            res?.data?.otp_var == true &&
            res?.data?.register == true &&
            res?.data?.user
          ) {
            setUserInfo(res?.data?.user);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          setIsLoggedIn(err?.response?.data?.register);
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setSkeleton(false);
          setIsLoading(false);
          }, 1000);
        });
    };
    getUserInfo();
  }, []);

  return (
    <context.Provider
      value={{
        isCommentsOpen,
        setIsCommentsOpen,
        notificationToggler,
        setNotificationToggler,
        userInfo,
        setUserInfo,
        isLoggedIn,
        setIsLoggedIn,
        isOtpVarified,
        setIsOtpVarified,
        isLoading,
        setIsLoading,
        otpVarRequired,
        setOtpVarRequired,
        skeleton,
        setSkeleton,
        popup, 
        setPopup,
        dropMenu,
        setDropMenu,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(context);
