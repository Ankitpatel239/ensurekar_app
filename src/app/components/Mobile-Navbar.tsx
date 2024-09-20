"use client"

import Link from "next/link";
import React, { useState } from "react";
import { X,CaretRight } from "phosphor-react";
import Image from "next/image";
import Logo from "../images/ensure_logo.png";

const MobileNavbar = ({ Sidebar, setOpenSidebar }: { Sidebar: boolean, setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {
  // const options = [
  //   {
  //     title: "Home",
  //     link: "/",
  //   },
  //   {
  //     title: "About",
  //     link: "/about",
  //   },
  //   {
  //     title: "Services",
  //     link: "",
  //     subOptions: [
  //       { title: "Payroll Processing", link: "/" },
  //       { title: "Accounting Services", link: "/" },
  //       { title: "Taxation Services", link: "/" },
  //       { title: "Real Estate Services", link: "/" },
  //       { title: "Healthcare Services", link: "/" },
  //       { title: "Dentist Services", link: "/" },
  //     ],
  //   },
  //   {
  //     title: "Shop",
  //     link: "",
  //     subOptions: [
  //       { title: "Shop Page", link: "/" },
  //       { title: "Shop Details", link: "/" },
  //       { title: "Cart", link: "/" },
  //       { title: "Checkout", link: "/" },
  //     ],
  //   },
  //   { title: "Blog", link: "", subOptions: [{ title: "Blog Page", link: "/" }, { title: "Blog Details", link: "/" }] },
  //   { title: "Contact", link: "/contact" },
  //   {
  //     title: "Pages",
  //     link: "",
  //     subOptions: [
  //       { title: "Appointment", link: "/" },
  //       { title: "Case Study", link: "/" },
  //       { title: "Our Team", link: "/" },
  //       { title: "Pricing", link: "/" },
  //       { title: "Login", link: "/" },
  //       { title: "Privacy Policy", link: "/" },
  //       { title: "404 Page", link: "/" },
  //     ],
  //   },
  // ];

  const options: any[] =[
    {title:'Business Steup',
      link:'/'
    },
    {title:'Talk to Expert',
      link:'/'
    },
    {title:'Tax Compliances',
      link:'/'
    },
    {title:'Trade Mark and IP',
      link:'/'
    },
    {title:'Documentation',
      link:'/'
    },
    {title:'Others',
      link:'/'
    },

]
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <nav className={`fixed top-0 left-0 h-full w-3/4 bg-s2 overflow-y-auto z-[999] transition-transform duration-500 transform ${Sidebar ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex justify-between items-center w-full p-4 sm:p-8">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <i
          className="text-3xl cursor-pointer"
          onClick={() => setOpenSidebar(false)}
        >
          <X />
        </i>
      </div>
        <ul className="text-lg sm:text-xl flex gap-6 lg:gap-10 items-start flex-col pl-8">
          {options.map((option, index) => (
            <li key={index}>
              {option.subOptions ? (
                <div className="flex flex-col justify-start items-start">
                  <div
                    className="flex justify-start items-center cursor-pointer"
                    onClick={() => toggleSubMenu(index)} // Toggle submenu
                  >
                    <span>{option.title}</span>
                    <i className="!text-xl pl-1 pt-1 duration-500">
                    <CaretRight/>
                    </i>
                  </div>

                  {/* Conditionally render subOptions based on state */}
                  {openSubMenu === index && (
                    <div className="pl-4 flex justify-start items-start flex-col gap-2 pt-2">
                      <ul>
                        {option.subOptions.map((subOption:any, subIndex:any) => (
                          <li key={subIndex}>
                            <Link href={subOption.link}  onClick={() => setOpenSidebar(false)} className="text-base">
                              <span>-</span> {subOption.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={option.link} className="menu-hover hover:after:border-p1">
                  {option.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default MobileNavbar;
