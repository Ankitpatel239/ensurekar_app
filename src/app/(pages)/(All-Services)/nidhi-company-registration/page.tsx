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

const NidhiCompanyRegistration = () => {

  const BreadcrumbData = {
    title: "Nidhi Company Registration ",
    heading: "Nidhi Company Registration",
    subHeading: "Nidhi Company in just 7 days",
    description:
      "Get Your Nidhi Company Registration, India's Fastest: Ensurekar Makes It Easy 100% Online Process",
    image: "",
  };
  const AdvantagesData = {
    title: "Nidhi Company Registration",
    heading: "Fastest Nidhi Company Registration In India | Same Day Process",
    description:
      "A Nidhi Company is an NBFC regulated by the Companies Act, 2013, focused on promoting savings and lending among its members. To register, it requires seven members and ₹10 lakhs in funds. While exempt from RBI registration, it follows MCA rules and is limited to borrowing and lending only within its membership.",
    image: dentist_section_img,
    advantages: [
      {
        title: "Minimal RBI Compliance",
        description:
          "Nidhi Companies are public limited companies that don’t require an RBI license to operate, simplifying the regulatory burden.",
        icon: <svg>...</svg>,
      },
      {
        title: "Reduced Risk",
        description:
          "Nidhi Companies only provide loans and accept deposits from their members, minimizing risk and maintaining a closed community for financial transactions.",
        icon: <svg>...</svg>,
      },
      {
        title: "Low Capital Requirement",
        description:
          "With a minimum capital requirement of just ₹10 lakhs, Nidhi Companies are easy to set up under Nidhi Rules, 2014.",
        icon: <svg>...</svg>,
      },
      {
        title: "Simple Setup Process",
        description:
          "Registration is straightforward, requiring only seven members and a few essential documents to incorporate with the MCA.",
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
        {title:"Submit Your Details",description:"Provide your basic details and business information on our platform to initiate the registration process."},
        {title:"Expert Assistance  & Documentation",description:"Our experts will help you obtain necessary information, reserve your company name, and prepare all required incorporation forms."},
        {title:"Receive Your Certificate",description:"Once filed with the MCA, receive your Nidhi Company incorporation certificate, along with your PAN, TAN, and other necessary documents within the stipulated timeline."}
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
    heading: "Nidhi Company Registration",
    image: save_time_money_section,
    description:[],
  };
  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading:"",
      description: [],
    },
    advantagesInfo: {
      heading: "",
      meta: "",
      description:
        "",
      advantages: [],
    },
    eligibilityCriteria: [
      {
        imageData: {
          imageUrl: dentist_section_img,
          imageDirection: "right",
        },
        heading: {
          start: "",
          blueText: "Requirements ",
          end: "for Nidhi Company Incorporation",
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
                  "A minimum of seven members are required for registration.",
              },
              {
                heading: "",
                description:
                  "The company must have at least 3 directors",
              },
              {
                heading: "",
                description:
                  "It can accommodate up to 200 members",
              },
              {
                heading: "",
                description:
                  "The minimum paid-up equity share capital must be ₹5 lakhs.",
              },
              {
                heading: "",
                description:
                  "Within a year of incorporation, Net Owned Funds (NOF) must increase to ₹10 lakhs.",
              },
              {
                heading: "Additional conditions",
                description:
                  "",
              },
              {
                heading: "",
                description:"At least 10% of the company's total deposits must be in unencumbered term deposits.",
              },
              {
                heading: "",
                description:"The NOF to deposit ratio should be 1:20, excluding accumulated losses and intangible assets.",
              },
              {
                heading: "",
                description:"At least 10% of total deposits must be maintained in a fixed deposit account with a nationalised bank.",
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
          end: "for Nidhi Company Incorporation",
        },
        subHeading: "The following documents must be submitted by all directors:",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              {
                heading: "",
                description: "Self-attested copy of PAN card",
              },
              {
                heading: "",
                description: "Self-attested copy of driver's license, voter ID, Aadhaar card, or passport",
              },
              {
                heading: "",
                description: "Self-attested copy of a bank statement, telephone bill, mobile bill, or electricity bill",
              },
              { heading: "", description: "Passport-size photograph" },
              {
                heading: "",
                description:
                  "Specimen signature certificate",
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
          blueText: "Key Facts ",
          end: "About Nidhi Companies:",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Nidhi companies can be set up without the approval of the RBI" },
              {
                heading: "",
                description:
                  "They are incorporated as public limited companies.",
              },
              {
                heading: "",
                description: 'The name must include "Nidhi Limited."',
              },
              {
                heading: "",
                description: "While Nidhi companies are regulated like NBFCs, their operations focus on internal borrowing and lending among members.",
              },
              {
                heading: "",
                description: "Under the Nidhi Rules of 2014, they are allowed to offer locker facilities to members.",
              },
              {
                heading: "",
                description: "Income from locker rentals should not exceed 20% of the company's total revenue for the financial year.",
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
          "Who oversees the regulation of Nidhi Companies?",
        answer:
          "NA",
      },
      {
        question:
          "Is my in-person presence required for the incorporation of a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What does Rule 10 of the Nidhi Regulations state?",
        answer:
          "NA",
      },
      {
        question:
          "Is it possible for a Nidhi Company to provide vehicle loans?",
        answer:
          "NA",
      },
      {
        question:
          "What is outlined in Rule 12 of the Nidhi Regulations?",
        answer:
          "NA",
      },
      {
        question:
          "Can a non-member apply for a loan from a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What is the minimum face value of shares in a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "What is the maximum dividend that a company is allowed to distribute?",
        answer:
          "NA",
      },
      {
        question:
          "Are preference shares issued by a Nidhi Company?",
        answer:
          "NA",
      },
      {
        question:
          "How can I expand my Nidhi Company's operations into new regions?",
        answer:
          "NA",
      },
     
     
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Nidhi Company Registration",
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
      {/* <PlansSection planData={planData} /> */}
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default NidhiCompanyRegistration;
