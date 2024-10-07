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

const ProprietorshipRegistration = () => {

  const BreadcrumbData = {
    title: "Sole Proprietorship Registration",
    heading: "Sole Proprietorship Registration",
    subHeading: "Sole Proprietorship Registration in just 7 days",
    description:"Setting up your Dream Business was never this easy 100% Online Process",
    image: "",
  };
  const AdvantagesData = {
    title: "Sole Proprietorship Registration",
    heading: "Sole Proprietorship Registration",
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
        {title:"Submit Your Details",description:"Fill in your basic information and business details on our platform to kick-start the registration process"},
        {title:"Expert Guidance & Documentation",description:"Our team will assist you with obtaining the Digital Signature Certificate (DSC), reserving your company name, and drafting the necessary incorporation forms"},
        {title:"Get Your Certificate",description:"After filing with the MCA, receive your LLP or company incorporation certificate within the designated time, along with your PAN, TAN, and other required documents."}
    ],
    footerMessage:"Simple, quick, and hassle-free!"
  };
  const planDatas = {
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
            features: ["Professional assistance Process",],
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
              instalmentAmount: "₹749.50",
              text: "Split payment by 3 with Zolvit Flex",
              knowMore: {
                text: "",
                link: "",
              },
            },
            features: ["Professional assistance Process",],
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
            questionHeading: ["What's Included"],
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
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
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
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
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
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
              "Income Tax Return (ITR) filing"
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
              "Professional guidance throughout the process",
              "GST registration",
              "MSME registration (Udyam)",
              "GST filing for one financial year (up to 300 transactions)",
              "Income Tax Return (ITR) filing"
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
  const planData= {
    heading: {
      startText: "",
      blueText: "Right plan",
      endText: "for Your Business",
    },
    description:
      "Ensurekar incorporation experts register over 1500 companies every month.",
    plansData: [
      {
        id: 1,
        state: "MP",
        description: "",
        plans: [
          {
            planName: "Standard",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "1",
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
                  isActive: true,
                  heading: "offer",
                  subHeading: "Unlock partner benefits Post",
                  description: "Post company incorporation worth Rs 4 lakhs",
                  knowMore: {
                    text: "visit here to grab the offer",
                    link: "",
                  },
                },
              ],
              splitPayment: {
                enabled: false,
                instalments: 2,
                instalmentAmount: "₹499.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "DSC in just 4 - 7 days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Fastrack",
            isActive: true,
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "2",
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
                  isActive: false,
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
                instalmentAmount: "749.50",
                text: "Split payment by 2 month with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
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
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Premium",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "3",
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
                  isActive: false,
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
                instalments: 3,
                instalmentAmount: "749.50",
                text: "Split payment by 3 with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Dedicated account manager",
                "Partnership deed drafted within 3 days",
                "Deed submission to the local registrar on your behalf",
                "PAN card issuance",
                "GST registration",
                "GSTR-1 & 3B filing for 12 months (up to 300 transactions)",
                "1-year license for accounting software",
                "Zero balance current account with 7% interest",
                "Trademark registration for your brand",
                "ITR filing for one financial year (up to 10 lakhs turnover)",
                ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
        ],
      },
      {
        id: 2,
        state: "DL",
        description: "",
        plans: [
          {
            planName: "Standard",
            description: "Perfect for initiating company registration",
            isActive: true,
            suggestionText: "",
            happyText: "",
            plan: {
              id: "4",
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
                  isActive: false,
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
            },
            features: {
              heading: ["What you'll get"],
              feature: [
                "Expert assisted process",
                "Your company name is reserved in just 2 - 4 days",
                "DSC in just 4 - 7 days",
                "SPICe+ form filing in 14 days*",
                "Incorporation Certificate in 14 - 21 days",
                "Company PAN+TAN",
                "DIN for directors",
              ],
            },
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Fastrack",
            isActive: true,
            description: "Quick company registration in 7 to 14 days",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "5",
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
                  isActive: false,
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
            },
            features: {
              heading: ["What you'll get"],
              feature: [
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
            recommendation: {
              recommended: true,
              text: "",
            },
          },
          {
            planName: "Premium",
            isActive: true,
            description:
              "Top priority service + annual compliance to keep your business on track",
            suggestionText: "",
            happyText: "",
            plan: {
              id: "6",
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
                  isActive: false,
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
                instalments: 3,
                instalmentAmount: "749.50",
                text: "Split payment by 3 with Zolvit Flex",
                knowMore: {
                  text: "",
                  link: "",
                },
              },
            },
            features: {
              heading: ["What you'll get"],
              feature: [
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
            recommendation: {
              recommended: true,
              text: "Yes, this is the best plan for you",
            },
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
    heading: "Sole Proprietorship Registration",
    image: save_time_money_section,
    description:[
      "A Proprietorship firm is one of the most important forms of a business organization. It is a popular form of business structure in India. A minimum of two persons are required to establish a Proprietorship firm."," A Proprietorship firm is where two or more persons come together to establish a business and divide its profits amongst themselves in the agreed ratio. The Proprietorship business includes any kind of trade, occupation and profession.",],
  };
  const OverviewData = {
    heading: "Sole Proprietorship Registration",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest Sole Proprietorship Registration In India | Same Day Process",
      description: [
        "Sole proprietorship firms are considered individuals owning businesses. Sole proprietorship refers to a business where there is no distinction between the owner and the business entity. A sole proprietor is also known as a sole trader, individual entrepreneur, and various other names. Hence there are some benefits of having a proprietorship firm too.",
      ],
    },
    advantagesInfo: {
      heading: "An Overview of ",
      meta: " Sole Proprietorship ",
      description:"",
      advantages: [
        {
          imageUrl: "",
          heading: "Simplicity and Ease of Setup",
          details:
            "Establishing a sole proprietorship is straightforward and requires minimal paperwork and regulatory compliance, making it quick to start.",
        },
        {
          imageUrl: "",
          heading: "Complete Control",
          details:
            "The owner has full authority over business decisions and operations, allowing for quick and flexible decision-making.",
        },
        {
          imageUrl: "",
          heading: "Tax Benefits",
          details:"Income from the business is taxed as personal income, which can result in lower overall tax rates for the owner compared to corporate tax rates.",
        },
        {
          imageUrl: "",
          heading: "Low Startup Costs",
          details:"Starting a sole proprietorship typically requires less capital than other business structures, reducing financial risk for the owner.",
        },
        {
          imageUrl: "",
          heading: "Direct Profit Retention",
          details:
            "The owner retains all profits generated by the business, providing a direct financial incentive for their efforts.",
        },
        {
          imageUrl: "",
          heading: "Minimal Regulatory Requirements",
          details:"Sole proprietorships face fewer regulations and legal formalities than corporations or Proprietorships, simplifying business management.",
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
          end: "for  Limited Liability Proprietorship Registration  - ",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "The applicant must be at least 18 years old.",
              },
              {
                heading: "",
                description:
                  "The applicant must be an Indian citizen.",
              },
              {
                heading: "",
                description:
                  "They should possess the legal capacity to enter into contracts.",
              },
              {
                heading: "",
                description:
                  "The proprietor should not have any legal disabilities.",
              },
              {
                heading: "",
                description:
                  "The applicant must not have a history of bankruptcy or previous felony convictions.",
              },
              {
                heading: "",
                description:
                  "The purpose of the business must be clearly defined at the time of registration.",
              },
              {
                heading: "",
                description:
                  " The business activities must be lawful, and the sale of illegal goods or services is prohibited.",
              },
              {
                heading: "",
                description:
                  "The business must have a unique name that has not been previously registered.",
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
          blueText: "Documents Required ",
          end: "for Proprietorship Firm Registration",
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
                description: "Aadhaar card of the sole proprietor",
              },
              {
                heading: "",
                description: "Permanent Account Number (PAN) card or another form of identity proof for the sole proprietor",
              },
              {
                heading: "",
                description: "Bank account details in the name of the proprietorship",
              },
              { heading: "", description:"Address proof for the business" },
              {
                heading: "",
                description:"Electricity bill, utility bill, or sale deed if the property is self-owned",
              },
              {
                heading: "",
                description:"MSME registration certificate",
              },
              {
                heading: "",
                description: "Trade license (if applicable)",
              },
              { heading: "", description: "GST number or GST certificate" },
              
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
          start: "The  ",
          blueText: "Checklist for Registering",
          end: "a sole proprietorship in India includes:",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Select an appropriate name for your sole proprietorship business" },
              {
                heading: "",
                description:
                  "Open a business bank account in the name of the company",
              },
              {
                heading: "",
                description:
                  "Register as an MSME",
              },
              {
                heading: "",
                description:
                  "Acquire necessary licenses, such as the FSSAI license or Shop and Establishment Act license",
              },
              {
                heading: "",
                description:
                  "Depending on your business needs, register for ESIC or EPFO",
              },
              {
                heading: "",
                description:
                  "Obtain all required certifications under the Shop and Establishment Act of 1947 (if applicable)",
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
      {question:"What is an LLP Agreement?",answer:"NA",},
      {question:"What is the applicable income tax rate for an LLP?",answer:"NA",},
      {question:"What are the LLP compliance requirements under the Companies Act 2013?",answer:"NA",},
      {question:"How can a partner be removed from an LLP?",answer:"NA",},
      {question:"What are the fees for LLP registration?",answer:"NA",},
      {question:"What is the process for registering an LLP?",answer:"NA",},
      {question:"How is the taxability of an LLP determined?",answer:"NA",},
      {question:"How does an LLP differ from an LLC?",answer:"NA",},
      {question:"Who can form an LLP?",answer:"NA",},
     
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Proprietorship Registration ",
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

export default ProprietorshipRegistration;
