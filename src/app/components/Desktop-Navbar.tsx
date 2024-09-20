"use client";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
const DesktopNavbar: React.FC = () => {
  // const options = [
  //   {
  //     title: "Home",
  //     link: "/",
  //   },
  //   {
  //     title: "About",
  //     link: "/About",
  //   },
  //   {
  //     title: "Services",
  //     link: "",
  //     subOptions: [
  //       {
  //         title: "All Services",
  //         link: "/All-Services",
  //       },
  //       {
  //         title: "Payroll Processing",
  //         link: "/Payroll-Processing",
  //       },
  //       {
  //         title: "Accounting Services",
  //         link: "/Accounting-Services",
  //       },
  //       {
  //         title: "Taxation Services",
  //         link: "/Taxation-Services",
  //       },
  //       {
  //         title: "Real State Services",
  //         link: "/Real-State-Services",
  //       },
  //       {
  //         title: "Healthcare Services",
  //         link: "/Healthcare-Services",
  //       },
  //       {
  //         title: "Dentist Services",
  //         link: "/Dentist-Services",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Contact",
  //     link: "/Contact",
  //   },
  //   {
  //     title: "Pages",
  //     link: "",
  //     subOptions: [
  //       {
  //         title: "Appointment",
  //         link: "/Appointment",
  //       },
  //       {
  //         title: "Case Study",
  //         link: "/Case-Study",
  //       },
  //       {
  //         title: "Case Study Details",
  //         link: "/Case-Study/Case-Study-Details",
  //       },
  //       {
  //         title: "Our Team",
  //         link: "/Our-Team",
  //       },
  //       {
  //         title: "Team Details",
  //         link: "/Our-Team/Team-Details",
  //       },
  //       {
  //         title: "About",
  //         link: "/About",
  //       },
  //       {
  //         title: "Pricing",
  //         link: "/Pricing",
  //       },
  //       {
  //         title: "FAQ Page",
  //         link: "/FAQs",
  //       },
  //       {
  //         title: "Login",
  //         link: "/Login",
  //       },
  //       {
  //         title: "Register",
  //         link: "/Register",
  //       },
  //       {
  //         title: "Privacy Policy",
  //         link: "/Privacy-Policy",
  //       },
  //       {
  //         title: "Terms & Conditions",
  //         link: "/Terms-Conditions",
  //       },
  //       {
  //         title: "404 Page",
  //         link: "/404-Page",
  //       },
  //     ],
  //   },
  // ];

  const options: any[] = [
    {
      title: "Business Steup",
      link: "",
      subOptions: [
        {
          title: "Digital Signature",
          link: "/digital-signature",
        },
        {
          title: "Udyam Registration",
          link: "/udyam-registration",
        },
        {
          title: "MSME Registration",
          link: "/msme-registration",
        },
      ],
    },
    { title: "Talk to Expert", link: "/" },
    { title: "Tax Compliances", link: "/" },
    { title: "Trade Mark and IP", link: "/" },
    { title: "Documentation", link: "/" },
    { title: "Others", link: "/" },
  ];
  const [border, setBorder] = useState("Home");

  const handleBottomBorder = (title: string) => {
    setBorder(title);
  };
  return (
    <nav className="max-lg:hidden">
      <ul className="flex justify-center mx-3 items-center gap-3">
        {options.map((option, index) => (
          <li key={index}>
            {option.subOptions ? (
              <div className="group cursor-pointer relative">
                <div
                  className={`flex text-nowrap justify-center items-center gap-1 relative px-2 py-3 rounded-lg duration-700 px-2 py-3 rounded-lg men hover:shadow-[0px_2px_0px_0px_#FFBF3F]
                 subMenuTitle  ${
                   border === option.title
                     ? "shadow-[0px_2px_0px_0px_#FFBF3F]"
                     : ""
                 }`}
                >
                  {option.title}
                  <CaretDown className="icon pt-0.5 block group-hover:rotate-180 ml-0.5 duration-700"/>
                 
                </div>
                <ul className="absolute top-12 left-0 pointer-events-auto group-hover:eventunset flex justify-start items-start flex-col w-[200px] py-6 gap-3 opacity-0 invisible bg-[#005151] group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1 text-white/80 rounded-lg group-hover:translate-y-0 group-hover:scale-100 translate-y-8 scale-75 duration-500">
                  {option.subOptions.map(
                    (
                      subOption: { title: string; link: string },
                      index: number
                    ) => (
                      <li key={index}>
                        <Link
                          href={subOption?.link}
                          className="px-6 hover:ml-2 duration-500 text-nowrap hover:text-yellow-400 hover:text-s2 subMenuItem transition-all"
                          onClick={() => handleBottomBorder(option.title)}
                        >
                          {subOption.title}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <Link
                href={option.link}
                className={`header_menu_shadow text-nowrap  duration-700 px-2 py-3 rounded-lg men hover:shadow-[0px_2px_0px_0px_#FFBF3F] ${
                  border === option.title
                    ? "shadow-[0px_2px_0px_0px_#FFBF3F] "
                    : ""
                }`}
                onClick={() => handleBottomBorder(option.title)}
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

export { DesktopNavbar };
