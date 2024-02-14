import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/gameLogo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className=" flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search game"
          className=" px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 rounded-full p-1 text-black cursor-pointer"
            onClick={() => {setTheme("dark");localStorage.setItem('theme','dark')}}  
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-100 rounded-full p-1 text-black cursor-pointer"
            onClick={() => {setTheme("light");localStorage.setItem('theme','light')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
