"use client";

import Link from "next/link";
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";

interface SubOption {
  title: string;
  link: string;
}

interface SubMenu {
  title: string;
  options: SubOption[];
}

const DesktopNavbar: React.FC = () => {
  const options: any[] = [
    {
      title: "Business Setup",
      subMenu: [
        {
          title: "Business Registration",
          options: [
            { title: "Private Limited Company", link: "/private-limited-company" },
            { title: "Limited Liability Partnership", link: "/limited-liability-partnership" },
            { title: "One Person Company", link: "/one-person-company" },
            { title: "Sole Proprietorship", link: "/sole-proprietorship" },
            { title: "Nidhi Company", link: "/nidhi-company" },
            { title: "Producer Company", link: "/producer-company" },
            { title: "Partnership Firm", link: "/partnership-firm" },
          ],
        },
        {
          title: "Licenses & Registration",
          options: [
            { title: "Digital Signature Certificate", link: "/digital-signature" },
            { title: "Udyam Registration", link: "/udyam-registration" },
            { title: "MSME Registration", link: "/msme-registration" },
            { title: "ISO Certification", link: "/iso-certification" },
            { title: "FSSAI [Food License]", link: "/fssai-registration" },
            { title: "IEC [Import/Export Code]", link: "/iec-registration" },
          ],
        },
      ],
    },
    {
      title: "Talk to Expert",
      link: "/",
    },
    {
      title: "Tax Compliances",
      link: "",
      mircoOptions: [
        { title: "Income tax filings", link: "/" },
        { title: "GST Filings", link: "/" },
        { title: "Accounting", link: "/" },
        { title: "MCA Compliance", link: "/" },
        { title: "Labour Law Compliance", link: "/" },
        { title: "TDS/TCS E-Filing", link: "/" },
      ],
    },
    {
      title: "Trade Mark and IP",
      link: "",
      mircoOptions: [
        { title: "Trade Mark Name Search", link: "/" },
        { title: "Trademark Registrations", link: "/" },
        { title: "Trademark Renewal", link: "/" },
        { title: "Trademark objection response", link: "" },
        { title: "Copyright Registration", link: "/" },
        { title: "Patent Registration", link: "/" },
      ],
    },
    { title: "Documentation", link: "/" },
    {
      title: "Others",
      link: "",
      mircoOptions: [
        { title: "Private Limited Incorporation", link: "/" },
        { title: "Virtual CFO", link: "/" },
        { title: "Digital Signature", link: "/digital-signature" },
        { title: "Udyam Registration", link: "/udyam-registration" },
        { title: "MSME Registration", link: "/msme-registration" },
      ],
    },
  ];

  const [hoveredMainMenu, setHoveredMainMenu] = useState<number | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<number | null>(null);
  const [active, setActive] = useState<string>("");

  return (
    <nav className="max-lg:hidden">
      <ul className="flex justify-center mx-3 items-center gap-1">
        {options.map((option:any, index: number) => (
          <li
            key={index}
            className={`flex text-nowrap group menu justify-center items-center gap-1 relative  rounded-lg duration-700  rounded-lg men hover:shadow-[0px_2px_0px_0px_#FFBF3F]
              subMenuTitle hover:cursor-pointer  ${
                active === option.title
                  ? "shadow-[0px_2px_0px_0px_#FFBF3F]"
                  : ""}
              `}
            onMouseEnter={() => setHoveredMainMenu(index)}
            onMouseLeave={() => setHoveredMainMenu(null)}
          >
            {/* Main Menu Title */}
            {option && option.link ? (
              <Link href={option.link} onClick={() => setActive(option.title)}>
                <p className="flex justify-center items-center gap-1 text-nowrap relative px-2 py-2 rounded-lg">
                  {option.title}
                </p>
              </Link>
            ) : (
              <div
                className="flex justify-center items-center gap-1 text-nowrap relative px-1 py-2 rounded-lg"
                onClick={() => setActive(option.title)}
              >
                {option.title}
                <CaretDown weight="bold" className="inline-block block group-hover:rotate-180 duration-700" />
              </div>
            )}

            {/* Show SubMenu Titles on Hover */}
            {hoveredMainMenu === index && (option.subMenu || option.mircoOptions) && (
              <ul
                className="absolute px-2 top-10 left-0 pointer-events-none group-hover:pointer-events-auto flex justify-start items-start flex-col py-6 gap-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:z-50 bg-s1 text-white/80 rounded-lg group-hover:translate-y-0 group-hover:scale-100 translate-y-8 scale-75 duration-500" onClick={() => setActive(option.title)}
              >
                {option.subMenu &&
                  option.subMenu.map((sub: SubMenu, subIndex: number) => (
                    <li
                      key={subIndex}
                      className="cursor-pointer px-2 text-start text-nowrap relative duration-500 subMenuItem"
                      onMouseEnter={() => setHoveredSubMenu(subIndex)}
                      onMouseLeave={() => setHoveredSubMenu(null)}
                      onClick={() => setActive(option.title)}
                    >
                      <p className="hover:text-s2 w-[200px]">{sub.title}</p>

                      {hoveredSubMenu === subIndex && (
                        <ul className="absolute left-full bg-s1 top-0 z-50 shadow-lg rounded-lg py-3 w-56 transition-all duration-300 transform -translate-x-2">
                          {sub.options.map((subOption: SubOption, subOptionIndex: number) => (
                            <li
                              key={subOptionIndex}
                              className="px-6 py-1.5 hover:ml-1 duration-500 hover:text-s2 subMenuItem"
                              onClick={() => setActive(option.title)}
                            >
                              <Link href={subOption.link}>{subOption.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}

                {option.mircoOptions &&
                  option.mircoOptions.map((mircoOption: SubOption, mircoOptionIndex: number) => (
                    <li
                      key={mircoOptionIndex}
                      className="px-6 py-1.5 hover:ml-1 text-nowrap duration-500 hover:text-s2 subMenuItem"
                    >
                      <Link href={mircoOption.link}>{mircoOption.title}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { DesktopNavbar };
