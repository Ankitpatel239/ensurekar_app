"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceCovered from "@/app/components/Section/Service/Service-Covered";
import { Calculator, ChartLineUp, FileText, Money } from "phosphor-react";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import Timeline from "@/app/components/Section/Service/Timeline";
import WhatWeCharge from "@/app/components/Section/Service/What-We-Charge";
import account_section_img from "../../../../images/account_section_img.png";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";

const accountingAndBookkeeping = () => {
  const BreadcrumbData = {
    title: "Accounting & tax Bookkeeping",
    heading: "Accounting and tax Bookkeeping",
    subHeading: "",
    description:
      "Discover comprehensive accounting services tailored to your business needs. From bookkeeping to financial reporting, ",
    image: "",
  };
  const ServiceCoveredData = {
    title: "service covered",
    heading: "service covered",
    subHeading: "",
    description: "",
    image: "",
    services: [
      {
        title: "Bookkeeping",
        description:
          "Maintain precise and up-to-date records with our professional bookkeeping services.",
        icon: <Calculator weight="fill" />,
      },
      {
        title: "Financial Reporting",
        description:
          "Gain valuable insights into your business's performance with our detailed financial reporting.",
        icon: <FileText weight="fill" />,
      },
      {
        title: "Tax Planning",
        description:
          "Stay tax-compliant and maximize your savings with our expert tax planning services.",
        icon: <Money weight="fill" />,
      },
      {
        title: "Financial Analysis",
        description:
          "Harness the power of data with our financial analysis services. We interpret financial trends,",
        icon: <ChartLineUp weight="fill" />,
      },
    ],
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Who Should Buy In?",
    subHeading:
      "If you are in an organisation with a growing team and finances, this bookkeeping service will prove indispensable. Any corporate organisations must maintain accurate books and accounts. Additionally, it is necessary for companies that are subject to an internal or statutory audit.",

    rolesData: {
      heading: "",
      description:
        "This Programme is designed to satisfy the accounting needs of businesses and people performing the following roles :",
      roles: [
        {
          icon: "",
          title: "Goods Traders",
          description: "",
        },
        {
          icon: "",
          title: "Professional & Consultants",
          description: "",
        },
        {
          icon: "",
          title: "Share Market Investors",
          description: "",
        },
        {
          icon: "",
          title: "Independent Business Personals",
          description: "",
        },
      ],
    },
  };
  const TimeLineData = {
    title: "",
    heading: "How It's Done",
    subHeading: "",
    description:
      "Our online bookkeeping services have end-to-end online fulfilment provided by our professional. It's very simple, completely digital, and available for all 365 days.",
    steps: {
      heading: "",
      description: "",
      step: [
        {
          heading: "Fill the form",
          description: "",
        },
        {
          heading: "Talk to an accounting expert",
          description: "",
        },
        {
          heading: "Buy our plan",
          description: "",
        },
        {
          heading: "Complete the onboarding",
          description: "",
        },
        {
          heading: "Start your bookkeeping",
          description: "",
        },
      ],
    },
    aboutSteps: [{ title: "", description: "" }],
    footerMessage: "",
  };
  const WhatWeChargeData = {
    title: "What we charge",
    heading: "What we charge for",
    description: "",
    charges: [
      "Book-Keeping of all the sales, purchases, and expenses of the company",
      "Free license to Dash - Easy to use, cloud based, mobile supported accounting software",
      " Preparation & filing of income tax returns (Company)",
      "Preparation & filing of balance sheet, P&L accounts, and director's report ",
      " AM (Assignment)",
    ],

    footerMessage: {
      startText: "All your Accouning and book-keeping needs for 1 year ",
      middleText: "Starting at just Rs.11111/-",
      endText: "",
    },
    imageUrl: account_section_img,
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      { question: "What is Bookkeeping?", answer: "N/A" },
      {
        question: "Is keeping records of all financial transactions required?",
        answer: "N/A",
      },
      { question: "Why do I require an accountant's services?", answer: "N/A" },
      {
        question:
          "A few months ago, I founded my startup. There are hardly any transactions at all. Should I employ an accountant full-time?",
        answer: "N/A",
      },
      {
        question:
          "For the year, I have made 500 transactions. What additional fees are there?",
        answer: "",
      },
      {
        question: "Will the accountant come in person to my office?",
        answer: "N/A",
      },
      {
        question:
          "For my business, I already have accounting software. Can your professionals employ the same software?",
        answer: "N/A",
      },
      {
        question:
          "•	What types of financial reports will I receive in this set?",
        answer: "N/A",
      },
      {
        question:
          "No accounting software is being used by me. Will this bundle get me access to any software?",
        answer: "N/A",
      },
      {
        question: "Can you tell me which accounting program will be used?",
        answer: "N/A",
      },
    ],
    imageUrl: faq_illus,
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceCovered ServiceCoveredData={ServiceCoveredData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <Timeline TimeLineData={TimeLineData} />
      <WhatWeCharge WhatWeChargeData={WhatWeChargeData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default accountingAndBookkeeping;
