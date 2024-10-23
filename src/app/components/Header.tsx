"use client";

import React, { useState, useEffect } from "react";
import { DesktopNavbar } from "./Desktop-Navbar";
import Link from "next/link";
import MobileNavbar from "./Mobile-Navbar";
import Image from "next/image";
import Logo from "../images/ensure_logo.png";
import { ArrowUpRight, PhoneCall } from "phosphor-react";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle sidebar toggle for mobile
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="top-0 left-0 right-0 z-50 header flex justify-center">
        <div className="flex justify-between items-center  text-s1 py-6">
          <div className="pb-1 flex justify-between items-start md:items-center gap-5">
            <button
              className="lg:hidden text-3xl mobileMenuOpenButton"
              onClick={handleSidebar}
            >
              ☰
            </button>
            <Link href="/" className="mr-5">
              <Image src={Logo} alt="Ensurekar logo" />
            </Link>
          </div>
          {/* Desktop Menu Start */}
          <DesktopNavbar />
          {/* Desktop Menu End */}
          <div className="flex justify-end items-center gap-2 sm:gap-6 xl:gap-10 font-medium max-sm:hidden font-bold">
            <div className="flex justify-between items-center gap-1">
              <div className="flex justify-between items-center gap-1">
                {/* <PhoneCall className="bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none"/> */}
                <PhoneCall
                  size={40}
                  className=" w-[50px] h-[50px] bg-s1 rounded-full text-s2 p-2 md:p-3 text-lg lg:text-2xl !leading-none"
                  color="#fad000"
                />
              </div>
              <Link
                href="tel:+123456789"
                className="max-xl:hidden text-nowrap font-semibold"
              >
                + 1234 567 865
              </Link>
            </div>
            <Link
              href="/Contact"
              className="flex text-nowrap justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-amber-300 border border-gray-600 text-mainTextColor group font-medim"
            >
              Get Started
              <ArrowUpRight
                weight="bold"
                className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Start */}
      <MobileNavbar Sidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      {/* Mobile Menu End */}
    </header>
  );
};

export default Header;
