"use client"
import Link from "next/link";
import React, { useState } from "react";
const DesktopNavbar: React.FC = () => {
  const options = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/About",
    },
    {
      title: "Services",
      link: "",
      subOptions: [
        {
          title: "All Services",
          link: "/All-Services",
        },
        {
          title: "Payroll Processing",
          link: "/Payroll-Processing",
        },
        {
          title: "Accounting Services",
          link: "/Accounting-Services",
        },
        {
          title: "Taxation Services",
          link: "/Taxation-Services",
        },
        {
          title: "Real State Services",
          link: "/Real-State-Services",
        },
        {
          title: "Healthcare Services",
          link: "/Healthcare-Services",
        },
        {
          title: "Dentist Services",
          link: "/Dentist-Services",
        },
      ],
    },
   
    {
      title: "Contact",
      link: "/Contact",
    },
    {
      title: "Pages",
      link: "",
      subOptions: [
        {
          title: "Appointment",
          link: "/",
        },
        {
          title: "Case Study",
          link: "/",
        },
        {
          title: "Case Study Details",
          link: "/",
        },
        {
          title: "Our Team",
          link: "/",
        },
        {
          title: "Team Details",
          link: "/",
        },
        {
          title: "About",
          link: "/",
        },
        {
          title: "Pricing",
          link: "/",
        },
        {
          title: "FAQ Page",
          link: "/",
        },
        {
          title: "Login",
          link: "/",
        },
        {
          title: "Register",
          link: "/",
        },
        {
          title: "Privacy Policy",
          link: "/",
        },
        {
          title: "Terms & Conditions",
          link: "/",
        },
        {
          title: "404 Page",
          link: "/",
        },
      ],
    },
  ];
  const [border, setBorder] = useState("Home");

const handleBottomBorder = (title:string) =>{
  console.log(title)
  setBorder(title)
}
  return (
    <nav className="max-lg:hidden">
      <ul className="flex justify-center items-center gap-3">
        {options.map((option, index) => (
          <li key={index}>
            {option.subOptions ? (
              <div className="group cursor-pointer relative">
                <div className={`flex justify-center items-center gap-1 relative px-2 py-3 rounded-lg duration-700 px-2 py-3 rounded-lg men hover:shadow-[0px_2px_0px_0px_#FFBF3F]
                 subMenuTitle ${border === option.title ? 'shadow-[0px_2px_0px_0px_#FFBF3F]':'' }` } 
                  >
                  {option.title}
                  <svg xmlns="http://www.w3.org/2000/svg"   height="15px" viewBox="0 0 1024 1024" className="icon pt-0.5 block group-hover:rotate-180 ml-0.5 duration-700" version="1.1"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"/></svg>
                </div>
                <ul
                  className="absolute top-12 left-0 pointer-events-auto group-hover:eventunset flex justify-start items-start flex-col w-[200px] py-6 gap-3 opacity-0 invisible bg-[#005151] group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1 text-white/80 rounded-lg group-hover:translate-y-0 group-hover:scale-100 translate-y-8 scale-75 duration-500"
                >
                  {option.subOptions.map((subOption, index) => (
                    <li key={index}>
                        <Link
                        href={subOption.link}
                        className="px-6 hover:ml-2 duration-500 text-nowrap hover:text-yellow-400 hover:text-s2 subMenuItem transition-all"
                        onClick={()=> handleBottomBorder(option.title) }
                        >
                        {subOption.title}
                        
                        </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              
                <Link
                  href={option.link}
                  className={`header_menu_shadow duration-700 px-2 py-3 rounded-lg men hover:shadow-[0px_2px_0px_0px_#FFBF3F] ${border === option.title ? 'shadow-[0px_2px_0px_0px_#FFBF3F]':'' }` } 
                  onClick={()=> handleBottomBorder(option.title) } 
                >
                  {option.title}
                </Link>
              
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export  {DesktopNavbar};