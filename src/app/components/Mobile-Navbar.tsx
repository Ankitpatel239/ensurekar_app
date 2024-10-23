"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { X, CaretRight } from "phosphor-react";
import Image from "next/image";
import Logo from "../images/ensure_logo.png";

interface Option {
  title: string;
  link?: string;
  subMenu?: Option[];
  options?: Option[];
  mircoOptions?: Option[];
}

const MobileNavbar = ({
  Sidebar,
  setOpenSidebar,
}: {
  Sidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const options: Option[] = [
    {
      title: "Business Setup",
      subMenu: [
        {
          title: "Business Registration",
          options: [
            {
              title: "Private Limited Company",
              link: "/pvt-ltd-incorporation",
            },
            {
              title: "Limited Liability Partnership",
              link: "/limited-liability-partnership-registration",
            },
            { title: "One Person Company", link: "/one-person-company" },
            {
              title: "Sole Proprietorship",
              link: "/sole-proprietorship-registration",
            },
            { title: "Nidhi Company", link: "/nidhi-company-registration" },
            { title: "Producer Company", link: "/producer-company" },
            {
              title: "Partnership Firm Registration",
              link: "/partnership-registration",
            },
          ],
        },
        {
          title: "Licenses & Registration",
          options: [
            {
              title: "Digital Signature Certificate",
              link: "/digital-signature-certificate",
            },
            { title: "Udyam Registration", link: "/udyam-registration" },
            { title: "MSME Registration", link: "/msme-registration" },
            { title: "ISO Certification", link: "/iso-certification" },
            { title: "FSSAI [Food License]", link: "/fssai-food-license" },
            { title: "IEC [Import/Export Code]", link: "/import-export-code" },
          ],
        },
      ],
    },
    {
      title: "Talk to Expert",
      link: "/contact",
    },
    {
      title: "Tax Compliances",
      link: "",
      subMenu: [
        {
          title: "GST and Other Indirect Tax",
          options: [
            { title: "GST Registration", link: "/" },
            { title: "GST Filling", link: "/" },
          ],
        },
        {
          title: "Annual Filing",
          options: [{ title: "MCA compliance", link: "/mca-compliances" }],
        },
        {
          title: "Labour compliances",
          options: [
            {
              title: "Provident Fund (PF)",
              link: "/labour-compliance/pf-registration",
            },
            {
              title: "ESI Registration",
              link: "/labour-compliance/esi-registration",
            },
            {
              title: "Professional tax",
              link: "/labour-compliance/professional-tax-registration",
            },
            {
              title: "Shops and Establishment lice",
              link: "/labour-compliance/shop-and-establishment-registration",
            },
          ],
        },
        {
          title: "Accounting and tax ",
          options: [
            {
              title: "Accounting & Tax Book-keeping",
              link: "/accounting/accounting-and-tax-bookkeeping",
            },
            {
              title: "TDS return filing ",
              link: "/accounting/tds-return-filing",
            },
            { title: "Virtual CFO", link: "" },
          ],
        },
      ],
    },
    {
      title: "Trade Mark and IP",
      link: "",
      mircoOptions: [
        {
          title: "Trade Mark Name Search",
          link: "/trade-mark-ip/trademark-search",
        },
        {
          title: "Trademark Registrations",
          link: "/trade-mark-ip/trademark-registration",
        },
        {
          title: "Trademark Renewal",
          link: "/trade-mark-ip/trademark-renewal",
        },
        {
          title: "Trademark objection response",
          link: "/trade-mark-ip/trademark-objection-response",
        },
        {
          title: "Copyright Registration",
          link: "/trade-mark-ip/copyright-registration",
        },
        { title: "Patent Registration", link: "/" },
      ],
    },
    { title: "Documentation", link: "/" },
    {
      title: "Others",
      link: "",
      mircoOptions: [
        {
          title: "Shareholder's Agreement",
          link: "/others/shareholder-agreement",
        },
        {
          title: "Non-Disclosure Agreement ",
          link: "/others/non-disclosure-agreement",
        },

        {
          title: "Digital Signature Certificate Test",
          link: "/digital-signature-certificate",
        },
        { title: "Virtual CFO", link: "/" },
      ],
      subMenu: [
        {
          title: "New pages",
          options: [],
        },
      ],
    },
  ];

  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openSubOptions, setOpenSubOptions] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenSubOptions(null); // Reset suboptions when opening a new menu
  };

  const toggleSubOptions = (index: number) => {
    setOpenSubOptions(openSubOptions === index ? null : index);
  };

  // Handle click outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSidebar(false);
      }
    };

    if (Sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Sidebar, setOpenSidebar]);

  return (
    <div
      className={`fixed inset-0 z-[999]  flex justify-start items-start bg-black bg-opacity-50 transition-opacity duration-300 ${
        Sidebar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <nav
        ref={menuRef}
        className={`h-full bg-s2 p-5 overflow-y-auto z-[999] transition-transform transform ease-in-out duration-300 ${
          Sidebar ? "translate-x-0 scale-100" : "-translate-x-full scale-75"
        }`}
        style={{ width: Sidebar ? "fit-content" : "0px" }}
      >
        <div className="flex justify-between  items-center w-full py-4 sm:p-8">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-50 mr-5" />
          </Link>
          <i
            className="text-3xl cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          >
            <X weight="bold" />
          </i>
        </div>

        <ul className="text-lg sm:text-xl mt-5 flex gap-2 lg:gap-10 items-start flex-col pl-3">
          {options.map((option, index) => (
            <li key={index}>
              {option.subMenu ? (
                <div className="flex flex-col">
                  {/* Title with submenu */}
                  <div
                    className="flex justify-between items-center cursor-pointer transition-all ease-in duration-300"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span className="font-medium text-xl">{option.title}</span>
                    <CaretRight
                      weight="bold"
                      className={`!text-xl pl-1 transform transition-transform duration-500 ${
                        openSubMenu === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Submenu options */}
                  {openSubMenu === index && (
                    <div className="pl-4 transition-all ease-in duration-300">
                      {option.subMenu.map((subOption, subIndex) => (
                        <div key={subIndex} className="flex flex-col mt-2">
                          <div
                            className="cursor-pointer flex justify-between items-center transition-all ease-in duration-300"
                            onClick={() => toggleSubOptions(subIndex)}
                          >
                            <span className="">{subOption.title}</span>
                            {subOption.options && (
                              <CaretRight
                                weight="bold"
                                className={`!text-xl pl-1 transform transition-transform duration-500 ${
                                  openSubOptions === subIndex ? "rotate-90" : ""
                                }`}
                              />
                            )}
                          </div>

                          {/* Sub-options under the submenu */}
                          {openSubOptions === subIndex && subOption.options && (
                            <ul className="pl-4 flex flex-col mt-2">
                              {subOption.options.map((opt, optIndex) => (
                                <li
                                  key={optIndex}
                                  className="relative pl-6 before:content-['\00BB'] before:absolute before:left-0 before:text-lg before:font-bold before:text-gray-500"
                                >
                                  <Link
                                    href={opt.link || "#"}
                                    className="text-base"
                                    onClick={() => setOpenSidebar(false)}
                                  >
                                    {opt.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : option.mircoOptions ? (
                <div className="flex flex-col">
                  {/* Title with micro-options */}
                  <div
                    className="flex justify-between items-center cursor-pointer transition-all ease-in duration-300"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <span className="font-medium text-xl">{option.title}</span>
                    <CaretRight
                      weight="bold"
                      className={`!text-xl pl-1  transform transition-transform duration-500 ${
                        openSubMenu === index ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Micro-options */}
                  {openSubMenu === index && (
                    <ul className="pl-4 flex flex-col mt-2 transition-all ease-in duration-300">
                      {option.mircoOptions.map((opt, optIndex) => (
                        <li
                          key={optIndex}
                          className="relative pl-6 before:content-['\00BB'] before:absolute before:left-0 before:text-lg before:font-bold before:text-gray-500"
                        >
                          <Link
                            href={opt.link || "#"}
                            className="text-base"
                            onClick={() => setOpenSidebar(false)}
                          >
                            {opt.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={option.link || "#"}
                  className="cursor-pointer"
                  onClick={() => setOpenSidebar(false)}
                >
                  {option.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
