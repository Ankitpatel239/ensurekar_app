"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import faq_illus from "../../../images/faq_illus.png";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import PlansSection from "@/app/components/Section/Plans-Section";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";

const LimitedLiabilityPartnershipRegistration = () => {
  const BreadcrumbData = {
    title: "Limited Liability Partnership Registration",
    heading: "Limited Liability Partnership Registration ",
    subHeading: "Limited Liability Partnership Registration in just 7 days",
    description:
      "Get Your Limited Liability Partnership Registration, India's Fastest: Ensurekar Makes It Easy 100% Online Process",
    image: "",
  };
  const AdvantagesData = {
    title: "Limited Liability Partnership Registration",
    heading: "Advantages of Limited Liability Partnership Registration",
    description:
      "Ensurekar is dedicated to supporting the financial health of your dental practice. From payroll solutions for dental professionals to compliance management,",
    image: dentist_section_img,
    advantages: [
      {
        title: "Authenticity",
        description:
          "NA",
        icon: <svg>...</svg>,
      },
      {
        title: "Cost and time savings",
        description:
          "NA",
        icon: <svg>...</svg>,
      },
      {
        title: "Document authenticity is improved",
        description:
          "NA",
        icon: <svg>...</svg>,
      },
    ],
  };
  const RegisterStepsData = {
    title: "Private Limited Incorporation",
    heading: "Steps to Register your",
    meta: "Private Limited Incorporation",
    description: "",
    steps: [
      {title: "Create you're account and submit details",description:""},
      {title: "consult with our experts",description:""},
      {title: "Get Your Certificate",description:""},
    ],
    aboutSteps:[
        {title:"Submit Your Details",description:"Fill in your basic information and business details on our platform to kick-start the registration process."},
        {title:"Expert Assistance  & Documentation",description:"Our team will assist you with obtaining the Digital Signature Certificate (DSC), reserving your company name, and drafting the necessary incorporation forms."},
        {title:"Get Your Certificate",description:"After filing with the MCA, receive your LLP or company incorporation certificate within the designated time, along with your PAN, TAN, and other required documents."}
    ],
    footerMessage:"Simple, quick, and hassle-free!"
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
            questionHeading: ["What We Offer:"],
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
                "Expert-guided registration process",
                "Company name reserved within 2-4 days",
                "DSC issued in 4-7 days",
                "LLP Incorporation form filed in 21 days*",
                "LLP Incorporation Certificate",
                "LLP Agreement form filed within 14 days (post-incorporation)",
                "Company PAN and TAN",
                "DIN for directors",
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
            questionHeading: ["What you'll get"],
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
             "Expert-guided registration process",
                "Company name reserved within 2-4 days",
                "DSC issued in 4-7 days",
                "LLP Incorporation form filed in 21 days*",
                "LLP Incorporation Certificate",
                "LLP Agreement form filed within 14 days (post-incorporation)",
                "Company PAN and TAN",
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
            questionHeading: ["What You'll Get"],
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
              "Expert-assisted registration process",
              "Company name reserved in just 24 hours*",
             "DSC issued in 24 hours*",
             "LLP Incorporation form filed within 14 days*",
             "LLP Incorporation Certificate",
             "LLP Agreement form filed in 7 days (post-incorporation)",
             "Company PAN + TAN",
             "Digital welcome kit with a post-incorporation compliance checklist",
             "DIN for directors",
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
            questionHeading: ["What you'll get"],
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
                "Expert-assisted registration process",
                "Company name reserved in just 24 hours*",
               "DSC issued in 24 hours*",
               "LLP Incorporation form filed within 14 days*",
               "LLP Incorporation Certificate",
               "LLP Agreement form filed in 7 days (post-incorporation)",
               "Company PAN + TAN",
               "Digital welcome kit with a post-incorporation compliance checklist",
               "DIN for directors",
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
            questionHeading: ["What You'll Receive"],
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
               "Expert-guided process",
               "Company name reserved within 24 hours*",
               "DSC issued in 24 hours*",
               "LLP Incorporation form filed within 14 days*",
               "LLP Incorporation Certificate",
               "LLP agreement form filed within 14 days (post-incorporation)",
               "Company PAN + TAN",
               "DIN for directors",
               "30-minute consultation with a senior CA/CS for business planning",
               "Form 8 & 11 filing (for one year)",
               "DIR-3 KYC for two directors",
               "One year income tax filing (up to ₹20 lakh turnover)",
               "Accounting & bookkeeping (up to 100 transactions)",
               "Financial statement preparation",
               "One-year accounting software license",
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
            questionHeading: ["What you'll get"],
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
           "Expert-guided process",
               "Company name reserved within 24 hours*",
               "DSC issued in 24 hours*",
               "LLP Incorporation form filed within 14 days*",
               "LLP Incorporation Certificate",
               "LLP agreement form filed within 14 days (post-incorporation)",
               "Company PAN + TAN",
               "DIN for directors",
               "30-minute consultation with a senior CA/CS for business planning",
               "Form 8 & 11 filing (for one year)",
               "DIR-3 KYC for two directors",
               "One year income tax filing (up to ₹20 lakh turnover)",
               "Accounting & bookkeeping (up to 100 transactions)",
               "Financial statement preparation",
               "One-year accounting software license",
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
    heading: "Limited Liability Partnership Registration",
    image: save_time_money_section,
    description:[
      "A partnership firm is one of the most important forms of a business organization. It is a popular form of business structure in India. A minimum of two persons are required to establish a partnership firm"," A partnership firm is where two or more persons come together to establish a business and divide its profits amongst themselves in the agreed ratio. The partnership business includes any kind of trade, occupation and profession.",],
  };
  const OverviewData = {
    heading: "Limited Liability Partnership Registration ",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest Limited Liability Partnership Registration In India | Same Day Process",
      description: [
        "The biggest challenge which incurs in a business partnership is that the inefficiency of a partner affects the progress of others. However, Limited Liability Partnership or LLP nullifies any such risk. It encourages entrepreneurs to commence joint ventures at the lowest liability. Moreover, it is the safest form of doing business for startups or small firms. Limited Liability Partnership Act, 2008 regulates the activities of a corporate partnership body and ensures its smooth operations. If you also choose LLP, then you should be well-versed with the LLP registration procedure. Needless to worry Ensurekar will help you usher your doubts in this regard.",
      ],
    },
    advantagesInfo: {
      heading: "An Overview of ",
      meta: "Limited Liability Partnership",
      description:
        "",
      advantages: [
        {
          imageUrl: "",
          heading: "Corporate Body",
          details:
            "An LLP is a separate legal entity, registered under the LLP Act 2008, giving it a distinct identity apart from its partners.",
        },
        {
          imageUrl: "",
          heading: "Perpetual Succession",
          details:
            "Unlike traditional partnerships, an LLP enjoys perpetual succession, meaning it continues to exist despite changes in partners due to retirement, death, or insolvency.",
        },
        {
          imageUrl: "",
          heading: "Separate Legal Entity",
          details:"An LLP is treated as an independent legal entity. Its assets and liabilities are separate from those of its partners, protecting personal assets from business debts. Many established organizations prefer to work only with limited companies or contractors rather than sole traders.",
        },
        {
          imageUrl: "",
          heading: "Customised LLP Agreement",
          details:"Partners can draft an LLP Agreement tailored to their needs, outlining rights and duties. If not, the LLP Act governs their relationship.",
        },
        {
          imageUrl: "",
          heading: "Artificial Legal Person",
          details:
            "An LLP is recognized as a legal person, capable of entering contracts, owning property, and conducting business in its own name.",
        },
        {
          imageUrl: "",
          heading: "Limited Liability",
          details:
            "Partners' liabilities are limited to their contributions, shielding personal assets from business risks. Each partner is only responsible for their own actions.",
        },
        {
          imageUrl: "",
          heading: "Flexible Partner Structure",
          details:
            "LLPs require a minimum of two partners, with no upper limit. At least two designated partners must be individuals, one of whom must be an Indian resident.",
        },
        {
          imageUrl: "",
          heading: "Business Control",
          details:
            "Partners manage day-to-day operations, but only designated partners are responsible for legal compliance, ensuring efficient governance.",
        },
        {
          imageUrl: "",
          heading: "Profit-Oriented",
          details:
            "LLPs are established solely for profit-making businesses and cannot operate as non-profits or charitable entities.",
        },
        {
          imageUrl: "",
          heading: "Mutual Agency Protection",
          details:
            "In an LLP, one partner's actions do not bind others unless authorised. Each partner is liable for their own acts, not for those of other partners.",
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
          blueText: "Eligibility Criteria",
          end: "for  Limited Liability Partnership Registration  ",
        },
        subHeading: "",
        startingDescription:
          "Any individual or entity with the legal capacity to enter into a contract can form a partnership. The key eligibility criteria are as follows:",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Minimum 2 Partners ",
              },
              {
                heading: "",
                description:
                  "Minimum 2 Designated Partners ",
              },
              {
                heading: "",
                description:
                  "One Resident Indian Designated Partner ",
              },
              {
                heading: "",
                description:
                  "Valid & Unique Name ",
              },
              {
                heading: "",
                description:
                  "Registered Office Address",
              },
              {
                heading: "",
                description:
                  "Adequate Capital ",
              },
              {
                heading: "",
                description:
                  "Business Objective ",
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
          end: "for private limited company registration",
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
                description: "KYC Documents of Partners",
              },
              {
                heading: "",
                description: "Latest Utility Bills as Proof of Registered Office Address",
              },
              {
                heading: "",
                description: "NOC from the Property Owner ",
              },
              { heading: "", description: "Digital Signature of Authorised Signatory" },
              {
                heading: "",
                description:
                  "Designated Partner Identification Number",
              },
              {
                heading: "",
                description:
                  "LLP Agreement ",
              },
              {
                heading: "",
                description: "Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill",
              },
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
          start: " ",
          blueText: "Key Features",
          end: "  of a Limited Liability Partnership (LLP)",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Statutorily Incorporated Entity" },
              {
                heading: "",
                description:
                  "Has a Distinct Legal Identity from Partners",
              },
              {
                heading: "",
                description: "Partners are Not Involved in Management",
              },
              {
                heading: "",
                description: "Limited Liability for Partners",
              },
              {
                heading: "",
                description: "Change in partners does not affect LLP's existence",
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
        question:
          "What is an LLP Agreement?",
        answer:
          "NA",
      },
      {
        question:
          "What is the applicable income tax rate for an LLP?",
        answer:
          "NA",
      },
      {
        question:
          "What are the LLP compliance requirements under the Companies Act 2013?",
        answer:
          "NA",
      },
      {
        question:
          "How can a partner be removed from an LLP?",
        answer:
          "NA",
      },
      {
        question:
          "What are the fees for LLP registration?",
        answer:
          "NA",
      },
      {
        question:
          "What is the process for registering an LLP?",
        answer:
          "NA",
      },
      {
        question:
          "How is the taxability of an LLP determined?",
        answer:
          "NA",
      },
      {
        question:
          "How does an LLP differ from an LLC?",
        answer:
          "NA",
      },
      {
        question:
          "Who can form an LLP?",
        answer:
          "NA",
      },
     
     
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Limited Liability Partnership Registration",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free",
        imageUrl: "",
      },
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

export default LimitedLiabilityPartnershipRegistration;
