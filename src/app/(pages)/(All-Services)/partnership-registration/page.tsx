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
import { title } from "process";

const PartnershipRegistration = () => {
  const BreadcrumbData = {
    title: "Partnership Registration  ",
    heading: "Partnership Registration ",
    subHeading: "Partnership Firm Registration in just 7 days",
    description:
      "  Setting up your Dream Business was never this easy 100% Online Process",
    image: "",
  };
  const AdvantagesData = {
    title: "Partnership Registration",
    heading: "Advantages of Partnership Registration",
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
        {title:"Submit Your Details",description:"Provide your basic information and partnership firm details on our platform to begin the registration process."},
        {title:"Expert Guidance & Documentation",description:"Our team will assist you with drafting the partnership deed, preparing necessary documents, and submitting them to the local registrar."},
        {title:"Receive Your Registration Certificate",description:"After the submission, you'll receive your partnership registration certificate along with the PAN and other essential documents within the specified timeline."}
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
              "Professional guidance throughout the process",
              "Partnership deed drafted within 3 days",
              "Deed submission to the local registrar on your behalf",
              "PAN card issuance",
              "Zero balance current account with 7% interest",
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
              "Expert guidance throughout the process",
              "Partnership deed drafted within 3 days*",
              "Deed submission to the local registrar on your behalf",
              "PAN card issuance",
              "GST registration",
              "GSTR-1 & 3B filing for 12 months (up to 300 transactions)",
              "1-year license for accounting software",
              "Zero balance current account with 7% interest",
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
    heading: "Partnership Registration",
    image: save_time_money_section,
    description:
      "A partnership firm is one of the most important forms of a business organization. It is a popular form of business structure in India. A minimum of two persons are required to establish a partnership firm. A partnership firm is where two or more persons come together to establish a business and divide its profits amongst themselves in the agreed ratio. The partnership business includes any kind of trade, occupation and profession.",
  };

  const OverviewData = {
    heading: "Partnership Registration  ",
    meta: "Overview",
    introduction: {
      heading:
        "Fastest Limited Liability Partnership Registration In India | Same Day Process",
      description: [
        "Partnership is an association of two or more persons to carry on a business in the capacity of co-owners. Each such person is called a partner. All the partners share the profits and losses in proportion of their respective ownership, or as agreed between them. The primary governing partnership registration law in India is the Indian Partnership Registration Act of 1932.",
        "A proprietary form of business is faced with many limitations. There is a limit to the amount of money that can be invested by a businessman in a business. The amount of strategic thinking that he/she can do is also limited. As such, sole proprietary businesses are usually small. Partnership form of business removes these limitations and allows the business to grow.",
      ],
    },
    advantagesInfo: {
      heading: "An Overview of ",
      meta: "Limited Liability Partnership",
      description:
        "Start your dream business today with the fastest Pvt Ltd company registration in India. Ensurekar simplifies the process with online tools, expert guidance, and competitive pricing. Register your company with the MCA and get started in no time. Register your company online, with business incorporation services that help you get your entity up and running. No more delays or difficulties! Registering your business with us provides you with the fastest, easiest, and most reliable way to get your documents registered. Now register your business with 100% certainty with Ensurekar.",
      advantages: [
        {
          imageUrl: "",
          heading: "Increased Capital ",
          details:
            "With more partners, raising funds becomes easier, attracting potential investors and enhancing your creditworthiness for loans.",
        },
        {
          imageUrl: "",
          heading: "Expanded Business Opportunities",
          details:
            "Partnerships distribute the workload, enabling diversification and growth, while also minimizing opportunity costs.",
        },
        {
          imageUrl: "",
          heading: "Built-In Trust",
          details:"Partnership fosters trust and values different viewpoints, making it crucial for effective decision-making and shared success.",
        },
        {
          imageUrl: "",
          heading: "Shared Responsibilities",
          details:"Profit and authority are divided among partners, reducing individual burden and allowing more focus on business growth.",
        },
        {
          imageUrl: "",
          heading: "Better Decision Making",
          details:
            "Diverse perspectives contribute to well-rounded decisions, driving efficient business operations and problem-solving.",
        },
        {
          imageUrl: "",
          heading: "Tax Benefits ",
          details:
            "Partnership firms are not taxed separately; partners can report profit and loss on their personal income tax returns, reducing tax liabilities.",
        },
        {
          imageUrl: "",
          heading: "Enhanced Flexibility",
          details:
            "Partnership structures are less regulated, providing freedom in managing and financing the business.",
        },
        {
          imageUrl: "",
          heading: "Emotional Support ",
          details:
            "Partners provide mutual encouragement, easing frustrations and creating a more collaborative work environment.",
        },
        {
          imageUrl: "",
          heading: "Access to New Ideas",
          details:
            "Different viewpoints stimulate creativity and innovation, offering a broader vision for business strategies.",
        },
        {
          imageUrl: "",
          heading: "Balanced Lifestyle",
          details:
            "Shared responsibilities allow for reduced stress and a healthier work-life balance, leading to improved mental health.",
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
          blueText: "Eligibility",
          end: "for Online Partnership Firm Registration",
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
                heading: "Individual",
                description:
                  "Any person legally able to enter into contracts can become a partner. A person may join as an individual and also as a Karta of a Hindu Undivided Family (HUF).",
              },
              {
                heading: "Firm",
                description:
                  "A partnership firm cannot enter into another partnership, but individual partners can form partnerships with other entities or individuals, sharing profits with their firm",
              },
              {
                heading: "Hindu Undivided Family (HUF)",
                description:
                  "The Karta of a HUF may join a partnership in their personal capacity, as long as they contribute their own skills or efforts.",
              },
              {
                heading: "Company",
                description:
                  "A company, being a legal entity, can join a partnership firm, provided its objectives allow it.",
              },
              {
                heading: "Trustees",
                description:
                  "Trustees of religious or family trusts may form partnerships unless their trust's objectives prohibit it.",
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
          end: "for Partnership Firm Registration",
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
                description: "Partnership Deed",
              },
              {
                heading: "",
                description: "	Address Proof of the firm",
              },
              {
                heading: "",
                description: "Identity Proof of Partners",
              },
              { heading: "", description: "Passport-sized Photographs" },
              {
                heading: "",
                description:
                  "Address Proof of Partners",
              },
              {
                heading: "",
                description:
                  "Registration Certificate (if applicable)",
              },
              {
                heading: "",
                description: "Bank Account Proof",
              },
              { heading: "", description: "Specimen Signature of partners" },
              { heading: "", description: "PAN Card of the Partnership Firm" },
              {
                heading: "",
                description: "GST Registration (if applicable)",
              },
              {
                heading: "",
                description: "Power of Attorney",
              },
              { heading: "", description: "NOC from Property Owner (for rented premises)" },
              { heading: "", description: "Affidavit" },
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
          start: "Steps for",
          blueText: "Partnership Firm Registration",
          end: "  Online",
        },
        subHeading: "",
        startingDescription:"",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "Number of Partners", description: "A partnership registration must have at least two partners. When performing banking transactions, the maximum is 10; in all other situations, the maximum is 20." },
              {
                heading: "Voluntary Registration",
                description:
                  "Although it is not required to register a partnership, it is always advisable to do so because doing so has many additional advantages.",
              },
              {
                heading: "Contractual partner",
                description: "There is a contractual tie between each partner. An original partnership deed registration format proposes that in order on various aspects governs the relationship. Each and every partner signs the deed, binding each and every one of them.",
              },
              {
                heading: "Competency of the Partners",
                description: "According to the Act, the partners entering into the agreement must be competent adults and cannot be minors.",
              },
              {
                heading: "Profit and Loss Sharing",
                description: "The partners divide the profits or losses according to the percentages that were agreed upon and recorded in the agreement.",
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
          "What documents are needed to register a partnership firm in India?",
        answer:
          "Yes, a private limited company can take a loan from an individual, subject to compliance with the provisions of the companies act, 2013 and other regulatory requirements. however, there are certain restrictions and procedures that must be followed",
      },
      {
        question: "Can I convert my partnership firm into a company in India?",
        answer:
          "No, private limited companies are not listed on the stock exchange. they cannot issue shares to the public and are restricted in terms of transferring shares, unlike public companies.",
      },
      {
        question: "Is an audit mandatory for partnership firms?",
        answer:
          "Private limited companies raise funds through equity investments from shareholders, venture capitalists, private equity, or by taking loans from banks and financial institutions.",
      },
      {
        question: "Is drafting a partnership deed necessary?",
        answer:
          "A private limited company is a business entity privately held by shareholders, where ownership is limited to a small group of investors. the shares are not available for public trading, and there are restrictions on the transfer of shares.",
      },
      {
        question:"What is the timeline for registering a partnership firm?",
        answer:
          "NA",
      },
      {
        question: "How can I convert a partnership firm into a private limited company?",
        answer:
          "NA",
      },
      {
        question: "What are the key requirements for registering a partnership firm in Tamil Nadu?",
        answer:
          "NA",
      },
      {
        question:"Can a partnership firm registered in Delhi operate in other states?",
        answer:"NA"
      },
      {
        question:"What is the required stamp paper value for a partnership deed in Haryana?",
        answer:"NA"
      },
      {
        question:"What are the eligibility criteria for registering a partnership firm in Madhya Pradesh?",
        answer:"NA"
      },
      
      // Add more FAQ items similarly
    ],
    imageUrl: faq_illus,
  };
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Partnership Registration ",
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

export default PartnershipRegistration;
