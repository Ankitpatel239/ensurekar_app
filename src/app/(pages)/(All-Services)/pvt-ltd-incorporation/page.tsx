"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image from "next/image";
import faq_illus from "../../../images/faq_illus.png";

import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
import { Headphones } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import PlansSection from "@/app/components/Section/Plans-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import { desc, head } from "framer-motion/client";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";
const Pvt_Ltd_Incorporation_Registration = () => {
  const BreadcrumbData = {
    title: "Private Limited Incorporation",
    heading: "Private Limited Incorporation Registration",
    description:
      "Get Your Pvt Ltd Registered, India's Fastest: Ensurekar Makes It Easy 100% Online Process",
    image: "",
    subHeading: "Private Limited Incorporation Registration in just 7 days",
  };
  const RegisterStepsData = {
    title: "Private Limited Incorporation",
    heading: "Steps to Register your",
    meta: "Private Limited Incorporation",
    description: "",
    steps: [
      {
        title: "Company Name Approval",
        description:
          "After selecting a unique name for your company, our team will check its availability and submit either the RUN form or SPICe-A form for approval. Once the name is approved, we will proceed with filing the SPICe-B form.",
      },
      {
        title: "Securing DSC and DIN",
        description:
          "We assist you in obtaining the Director Identification Number (DIN) and Digital Signature Certificate (DSC) by filing the DIR-3 form, ensuring you have everything needed for online document submission.",
      },
      {
        title: "Incorporation and Document Filing",
        description:
          "Our team will handle the submission of key incorporation documents, including the MoA, AoA, and SPICe+ form. We'll also ensure your company receives its PAN and TAN. Upon successful registration, the MCA will issue your certificate of incorporation.",
      },
    ],
  };
  const planData = {
    heading: {
      startText: "",
      blueText: "Right plan",
      endText: "for Your Business",
    },
    description:
      "Vakilsearch's incorporation experts register over 1500 companies every month.",
    plans: [
      {
        id: 1,
        name: "Standard",
        description: "Perfect for initiating company registration",
        states: [
          {
            state: "MP",
            price: "₹1499",
            discount: "₹500 off",
            afterDiscount: "₹999",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: false,
              instalments: 2,
              instalmentAmount: "₹499.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Company Name Reserved in 2-4 Days",
              "Digital Signature Certificate (DSC) Issued in 4-7 Days",
              " SPICe+ Form Filing Completed in 14 Days",
              "Incorporation Certificate Issued in 14-21 Days",
              "Company PAN and TAN",
              "Director Identification Number (DIN) for Directors",
            ],
          },
          {
            state: "DL",
            price: "₹1999",
            discount: "₹500 off",
            afterDiscount: "₹1499",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: false,
              instalments: 2,
              instalmentAmount: "₹749.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Expert assisted process",
              "Your company name is reserved in just 2 - 4 days",
              "DSC in just 4 - 7 days",
              "SPICe+ form filing in 14 days*",
              "Incorporation Certificate in 14 - 21 days",
              "Company PAN+TAN",
              "DIN for directors",
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Fastrack",
        description: "Quick company registration in 7 to 14 days",
        states: [
          {
            state: "MP",
            price: "₹2999",
            discount: "50% off",
            afterDiscount: "₹1499",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: true,
              instalments: 2,
              instalmentAmount: "₹749.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Expert-Guided Process",
              "Company Name Reservation in Just 1-2 Days*",
              "Digital Signature Certificate (DSC) Issued in 3-4 Days",
              "SPICe+ Form Filing Completed in 5-7 Days*",
              "Incorporation Certificate Delivered in 7-14 Days",
              "Company PAN and TAN",
              "Director Identification Number (DIN)",
              "Digital Welcome Kit with a Post-Incorporation Compliance Checklist",
            ],
          },
          {
            state: "DL",
            price: "₹3999",
            discount: "50% off",
            afterDiscount: "₹1999",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: true,
              instalments: 2,
              instalmentAmount: "₹999.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Expert-Assisted Process",
              "Company Name Reservation in 1-2 Days*",
              "Digital Signature Certificate (DSC) in 3-4 Days",
              "SPICe+ Form Filing in 5-7 Days*",
              "Incorporation Certificate Issued in 7-14 Days",
              "Company PAN and TAN",
              "Director Identification Number (DIN)",
              "Appointment of Auditor",
              "Issuance of Share Certificates",
              "INC 20A Form Filing",
              "DIR 3 KYC for 2 Directors",
              "Accounting & Bookkeeping (Up to 100 Transactions)",
              "Financial Statement Preparation",
              "1-Year License for Accounting Software",
              "Filing of AOC 4, MGT 7 & ADT 1",
              "Annual Filing (For Turnover Up to 20 Lakhs)",
              "Facilitation of Annual General Meeting",
              "Compliance with PF and ESI Statutory Regulations",
              "One-Year Income Tax Filing (For Turnover Up to 20 Lakhs)",
              "30-Minute Consultation Call with a Senior CA/CS for Business Planning",
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Premium",
        description:
          "Top priority service + annual compliance to keep your business on track",
        states: [
          {
            state: "MP",
            price: "₹29,999",
            discount: "17% off",
            afterDiscount: "₹24,999",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: true,
              instalments: 2,
              instalmentAmount: "₹12,499.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Expert assisted process",
              "Your company name is reserved in just 1 - 2 days*",
              "DSC in just 3 - 4 days",
              "SPICe+ form filing in 5 - 7 days*",
              "Incorporation Certificate in 7 - 14 days",
              "Company PAN+TAN",
              "DIN for directors",
              "Digital welcome kit that includes a checklist of all post-incorporation compliances",
              "Appointment of Auditor - ADT 01",
              "Issuance of share certificate",
              "INC 20 A form filing",
              "DIR 3 KYC (For 2 directors)",
              "Accounting & Bookkeeping (Up to 100 transactions)",
              "Financial statement preparation",
              "Accounting software (1-year license)",
              "AOC 4, MGT 7 & ADT filing",
              "Annual filing (Up to turnover of 20 lakhs)",
              "Facilitation of Annual General Meeting",
              "Statutory regulations PF, ESI",
              "One Year Income Tax filing (Up to turnover of 20 lakhs)",
              "30-minute call with a senior CA/CS for your business planning",
            ],
          },
          {
            state: "DL",
            price: "₹39,999",
            discount: "17% off",
            afterDiscount: "₹32,999",
            laterPaid: {
              ammount: "13,726",
              text: "+ Govt. Fee (to be paid later)",
              iconInfo: {
                text: "",
                link: "",
              },
            },
            offers: [
              {
                imageUrl: "",
                heading: "",
                subHeading: "Unlock partner benefits Post",
                description: "Post company incorporation worth Rs 4 lakhs",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            ],
            splitPayment: {
              enabled: true,
              instalments: 2,
              instalmentAmount: "₹16,499.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: [
              "Expert assisted process",
              "Your company name is reserved in just 1 - 2 days*",
              " DSC in just 3 - 4 days",
              "SPICe+ form filing in 5 - 7 days*",
              "Incorporation Certificate in 7 - 14 days",
              "Company PAN+TAN",
              "DIN for directors",
              "Digital welcome kit that includes a checklist of all post-incorporation compliances",
              "Appointment of Auditor - ADT 01",
              "Issuance of share certificate",
              "INC 20 A form filing",
              "DIR 3 KYC (For 2 directors)",
              "Accounting & Bookkeeping (Up to 100 transactions)",
              "Financial statement preparation",
              "Accounting software (1-year license)",
              "AOC 4, MGT 7 & ADT filing",
              "Annual filing (Up to turnover of 20 lakhs)",
              "Facilitation of Annual General Meeting",
              "Statutory regulations PF, ESI",
              "One Year Income Tax filing (Up to turnover of 20 lakhs)",
              "30-minute call with a senior CA/CS for your business planning",
            ],
          },
        ],
      },
    ],
    defaultState: "MP",
    defaultPlan: "Standard",
    statesOptions: [
      { value: "AP", label: "Andhra Pradesh" },
      { value: "AR", label: "Arunachal Pradesh" },
      { value: "AS", label: "Assam" },
      { value: "BR", label: "Bihar" },
      { value: "CG", label: "Chhattisgarh" },
      { value: "GA", label: "Goa" },
      { value: "GJ", label: "Gujarat" },
      { value: "HR", label: "Haryana" },
      { value: "HP", label: "Himachal Pradesh" },
      { value: "JK", label: "Jammu and Kashmir" },
      { value: "JH", label: "Jharkhand" },
      { value: "KA", label: "Karnataka" },
      { value: "KL", label: "Kerala" },
      { value: "MP", label: "Madhya Pradesh" },
      { value: "MH", label: "Maharashtra" },
      { value: "MN", label: "Manipur" },
      { value: "ML", label: "Meghalaya" },
      { value: "MZ", label: "Mizoram" },
      { value: "NL", label: "Nagaland" },
      { value: "OD", label: "Odisha" },
      { value: "PB", label: "Punjab" },
      { value: "RJ", label: "Rajasthan" },
      { value: "SK", label: "Sikkim" },
      { value: "TN", label: "T amil Nadu" },
      { value: "TG", label: "Telangana" },
      { value: "TR", label: "Tripura" },
      { value: "UP", label: "Uttar Pradesh" },
      { value: "UT", label: "Uttarakhand" },
      { value: "WB", label: "West Bengal" },
      { value: "AN", label: "Andaman and Nicobar Islands" },
      { value: "CH", label: "Chandigarh" },
      { value: "DN", label: "Dadra and Nagar Haveli" },
      { value: "DD", label: "Daman and Diu" },
      { value: "DL", label: "Delhi" },
      { value: "LD", label: "Lakshadweep" },
      { value: "PY", label: "Puducherry" },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "Private Limited Incorporation",
    image: save_time_money_section,
    description:
      "It is an antiquated or the very oldest form of business entity and also the simplest form to set up and most commonly run and formed entity in India.A Private Limited Company requires a formal registration with the Registrar of Companies (ROC).",
  };
  const AdvantagesData = {
    title: "Private Limited Incorporation",
    heading: "Advantages of Private Limited Incorporation",
    description:
      "Ensurekar is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,",
    image: dentist_section_img,
    advantages: [
      {
        title: "Authenticity",
        description:
          "When conducting online business, authentication is useful for verifying the accuracy of an individual's personal information, and DSC provides greater authenticity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost and time savings",
        description:
          "You can digitally sign PDF files and send them much faster than you can physically sign paper copies of documents and scan them to send via email. It is not necessary for a digital signature certificate online holder to be physically present to conduct or authorize business.",
        icon: <svg>...</svg>,
      },
      {
        title: "Document authenticity is improved",
        description:
          "In most cases, a digitally signed document provides the recipient with greater assurance that the signer is genuine.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const OverviewData = {
    heading: "Private limited",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest Private Limited Incorporation Registration In India | Same Day Process",
      description: [
        "It is an antiquated or the very oldest form of business entity and also the simplest form to set up and most commonly run and formed entity in India.",
        " A Private Limited Company requires a formal registration with the Registrar of Companies (ROC).",
      ],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of Digital Signature",
      description:
        "Start your dream business today with the fastest Pvt Ltd company registration in India. Ensurekar simplifies the process with online tools, expert guidance, and competitive pricing. Register your company with the MCA and get started in no time. Register your company online, with business incorporation services that help you get your entity up and running. No more delays or difficulties! Registering your business with us provides you with the fastest, easiest, and most reliable way to get your documents registered. Now register your business with 100% certainty with Ensurekar.",
      advantages: [
        {
          imageUrl: "",
          heading: "Limited Liability ",
          details:
            "A major advantage of a private limited company is limited liability, which protects shareholders' personal assets. If the company faces financial troubles or legal claims, shareholders' personal wealth remains secure. Their liability is restricted to their investment, meaning they are only responsible for company debts up to the value of their shares.",
        },
        {
          imageUrl: "",
          heading: "Continuous Existence",
          details:
            "A company enjoys 'perpetual succession', meaning it continues to exist until legally dissolved. As a separate legal entity, a company is unaffected by the death or departure of any member and remains operational regardless of changes in membership. This perpetual succession is a key feature of a company's structure",
        },
        {
          imageUrl: "",
          heading: "Separate Legal Entity ",
          details:
            "A private limited company is legally separate from its owners, enabling it to own property, incur debts, and enter contracts in its own name. This distinction simplifies management, boosts credibility with customers and suppliers, and streamlines selling or transferring ownership.",
        },
        {
          imageUrl: "",
          heading: "Credibility and Professionalism ",
          details:
            "A limited or private company boosts your credibility and professionalism. Registered with Companies House, these companies are seen as more prestigious, making a strong impression on clients, suppliers, and investors. This perception of stability can lead to better business opportunities, easier credit access, and favorable supplier terms. \n\n Many established organizations prefer to work only with limited companies or contractors rather than sole traders.",
        },
        {
          imageUrl: "",
          heading: "Easier Access to Capital ",
          details:
            "Raising capital is typically easier for private limited companies. Directors can issue shares to attract investors, providing essential funds for expansion. This financing flexibility is especially beneficial for startups and growing businesses needing significant investment to scale operations.",
        },
        {
          imageUrl: "",
          heading: "Better Professional Status ",
          details:
            "As a sole trader, your business name isn't protected unless trademarked, allowing anyone to use it. In contrast, a registered limited company automatically protects its name, preventing unauthorized use.\n\n A unique name is essential for online visibility, making it a key reason to form a limited company. Additionally, limited companies often seem larger and more professional, enhancing their image and fostering trust. This can lead to stronger relationships, more opportunities, and better chances of attracting clients and investors, even influencing bank loan approvals due to perceived stability.",
        },
        {
          imageUrl: "",
          heading: "Confidentiality and Privacy ",
          details:
            "This advantage protects business information, including trade secrets, by allowing private limited companies to maintain confidentiality with fewer disclosure requirements. Once registered with Companies House, your company name is legally protected, preventing other private limited companies from using it and safeguarding your bra",
        },
        {
          imageUrl: "",
          heading: "Flexibility in Ownership ",
          details:
            "Transferring ownership is easier for private limited companies than for sole traders or public companies.In cases where you wish to sell your shares, cease trading, or if you pass away, you or your executor can easily transfer ownership due to the share structure of limited companies.If you're the sole director, you likely own all the shares. In companies with multiple shareholders, ownership is divided among them. Regardless of whether you own all or part of the shares, changing ownership is a straightforward process.",
        },
        {
          imageUrl: "",
          heading: "Dual Relationship",
          details:
            "In the company form of organization it is possible for a company to make a valid and effective contract with any of tis members. It is also possible for a person to be in control of a company and at the same time be in its employment. Thus, a person can at the same time be a shareholder, creditor, director and also an employee of the company",
        },
        {
          imageUrl: "",
          heading: "Better Income Splits ",
          details:
            "If you have incorporated a limited company in India, you can easily distribute income among your spouse or family members. By issuing dividends to them, you can leverage their tax-free income up to the basic exemption limit and benefit from the ₹1 lakh tax-free dividend allowance. This strategy helps in dividing your business profits, thereby reducing your personal tax liabilities.",
        },
      ],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Eligibilty Criteria ",
          end: "for private limited company registration",
        },
        subHeading: "",
        startingDescription:
          "According to MCA guidelines, a private limited company must have a minimum of two directors and shareholders. While shareholders can be individuals or corporate entities, directors must be individuals. Additionally, a registered office address in India is required. The following criteria must be fulfilled for private limited company registration:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "The applicant must be at least eighteen years old",
              },
              {
                heading: "",
                description:
                  "The applicant must be a citizen or resident of India",
              },
              {
                heading: "",
                description:
                  "The company must have between 200 and 300 members",
              },
              {
                heading: "",
                description:
                  "There must be a minimum of 2 directors or shareholders",
              },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "left",
        },
        heading: {
          start: "",
          blueText: "Document",
          end: "  for private limited company registration  ",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Passport-sized photographs of directors",
              },
              {
                heading: "",
                description: "Proof of residential address for directors",
              },
              {
                heading: "",
                description: "Photo identification for directors",
              },
              { heading: "", description: "Sample signatures" },
              {
                heading: "",
                description:
                  "A self-declaration regarding directorships in other companies",
              },
              {
                heading: "",
                description:
                  "Lease or rent agreement for the registered office",
              },
              {
                heading: "",
                description: "No objection letter from the property owner",
              },
              { heading: "", description: "Aadhaar card" },
              { heading: "", description: "PAN card" },
              {
                heading: "",
                description: "Director Identification Number (DIN)",
              },
              {
                heading: "",
                description: "Digital Signature Certificate (DSC)",
              },
              { heading: "", description: "Memorandum of Association (MoA)" },
              { heading: "", description: "Articles of Association (AoA)" },
            ],
          },
        ],
      },
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Checklist",
          end: " for private limited Company Registration ",
        },
        subHeading: "",
        startingDescription:
          "As per the MCA, a checklist has to be met for registering your company. Here is a clear outline of a checklist for private limited company registration to follow:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "At least 2 Directors" },
              {
                heading: "",
                description:
                  "Directors and shareholders can be the same person",
              },
              {
                heading: "",
                description: "All the Directors should have DIN and DSC",
              },
              {
                heading: "",
                description: "Have the minimum Authorised share capital",
              },
              {
                heading: "",
                description: "Have the minimum Paid up share capital",
              },
              { heading: "", description: "Draft and MoA and AoA" },
              {
                heading: "",
                description: "Need details of the company working address",
              },
              {
                heading: "",
                description: "NOC and Rental Agreement from the landlord",
              },
            ],
          },
        ],
      },
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      {
        question: "Can a private limited company take a loan from an individual?",
        answer:
          "Yes, a private limited company can take a loan from an individual, subject to compliance with the provisions of the companies act, 2013 and other regulatory requirements. however, there are certain restrictions and procedures that must be followed",
      },
      {
        question: "Are private limited companies listed on the stock exchange?",
        answer:
          "No, private limited companies are not listed on the stock exchange. they cannot issue shares to the public and are restricted in terms of transferring shares, unlike public companies.",
      },
      {
        question:"How do private limited companies raise funds?",
        answer:"Private limited companies raise funds through equity investments from shareholders, venture capitalists, private equity, or by taking loans from banks and financial institutions."
      },
      {
        question:"What is a private limited company?",
        answer:"A private limited company is a business entity privately held by shareholders, where ownership is limited to a small group of investors. the shares are not available for public trading, and there are restrictions on the transfer of shares."
      },
      {
        question:"What are the benefits of registering a private limited company in india?",
        answer:"Registering a private limited company in india offers benefits like limited liability for shareholders, ease of raising funds, perpetual succession, separate legal entity, and credibility with financial institutions and investors."
      },
      {
        question:"Why choose a private limited company structure?",
        answer:"Choosing a private limited company structure provides advantages like limited liability protection, ease of raising capital, tax benefits, and the flexibility to grow the business without extensive compliance requirements faced by public companies."
      },
      {
        question:"Is a private limited company a corporation?",
        answer:"Yes, a private limited company is a type of corporation, but it is privately held and not traded on public stock exchanges. it's a separate legal entity from its owners and has limited liability."
      },
      // Add more FAQ items similarly
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Private Limited Registration ",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description: "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl: "",
      },
      { heading: "Hassle-Free & Fast Service", description: "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process", imageUrl: "" },
      { heading: "Transparent & Affordable", description: "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free", imageUrl: "" },
    ],
  };
  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer stories",
    description:
      "Discover the journey behind EnsureKar's success and how we've helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
    testimonials: [
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },

      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
      {
        image: testimonial10,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Isabelle McKinney",
        position: "Product Manager",
      },
      {
        image: testimonial9,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Amy Gutierrez",
        position: "CFO, Solutions",
      },
      {
        image: testimonial8,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "John D",
        position: "Small Business Owner",
      },
      {
        image: testimonial7,
        text: "Ensurekar's personalized service has been a game-changer for my small business. Efficient payroll processing.",
        name: "Hunter Romero",
        position: "HR Manager",
      },
      {
        image: testimonial6,
        text: "Ensurekar's payroll solutions have transformed HR processes at Retail Innovations Ltd. The user-friendly platform",
        name: "Ora Wong",
        position: "Finance Director",
      },
    ],
  };
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <PlansSection planData={planData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />

    </div>
  );
};

export default Pvt_Ltd_Incorporation_Registration;
