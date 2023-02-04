import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="xl:container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="flex items-center justify-center text-[20px] text-[#6765F0] leading-[33px]">
            <span className="bg-[#6765F0] text-[20px] text-[#fff] inline-block shadow-lg shadow-[0px 20px 80px rgba(51, 78, 123, 0.3)] leading-[33px] font-[500] w-[67px] h-[38px] rounded-[10px] flex justify-center items-center mr-2">
              Gym
            </span>
            <span>baran</span>
          </a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="  menu menu-horizontal px-1 text-[16px] font-[500] text-[#000]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Program</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a className="bg-[#264373] shadow-lg shadow-[0px 20px 80px rgba(51, 78, 123, 0.3)] rounded-[10px] w-[114px] text-center inline-block text-[#fff]">
                Log in
              </a>
            </li>
          </ul>
        </div>
        <div ref={ref} className="flex-none  block md:hidden relative">
          <span onClick={() => setShowMenu((prev) => !prev)} className="">
            <i className=" ri-menu-line cursor-pointer text-[2rem] text-[#0A2259]"></i>
          </span>

          <div
            className={
              showMenu
                ? "absolute  top-[50px] right-[50px] visible opacity-100 cursor-pointer transition-all ease-in delay-150 transform translate-y-[0px]"
                : "absolute  top-[50px] right-[50px] invisible opacity-0 transition-all ease-out delay-150 translate-y-[50px]"
            }
          >
            <ul className=" bg-[#fff] shadow-lg shadow-[rgba(17, 17, 26, 0.1) 0px 0px 16px;]  menu  text-[16px] font-[500] text-[#000] px-10 py-5 rounded-md">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Program</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a className="bg-[#264373] shadow-lg shadow-[0px 20px 80px rgba(51, 78, 123, 0.3)] rounded-[10px] w-[114px] text-center inline-block text-[#fff]">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
