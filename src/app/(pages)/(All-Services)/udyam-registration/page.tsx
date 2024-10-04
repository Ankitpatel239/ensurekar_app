"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image, { StaticImageData } from "next/image";
import faq_illus from '../../../images/faq_illus.png';
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import { Headphones } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode }[];
}
interface OverviewData {
  heading: string;
  meta: string;
  introduction: {
    heading: string;
    description: string[];
  };
  advantagesInfo: {
    heading: string;
    meta: string;
    description: string;
    advantages: {
      imageUrl: string;
      heading: string;
      details: string;
    }[];
  };
  eligibilityCriteria: {
    imageData: {
      imageUrl: StaticImageData;
      imageDirection: string;
    };
    heading: {
      start: string;
      blueText: string;
      end: string;
    };

    subHeading: string;
    startingDescription: string;
    endingDescription: string;
    requiredSteps?: {
      heading: string;
      description: string;

      steps: { heading: string; description: string }[];
    }[];
  }[];
}
const UdyamRegistration = () => {
  const BreadcrumbData = {
    title: "Udyam Registration",
    heading: "Udyam Registration Certificate",
    description:
      "Hassle-free Udyog registration. Expert assistance, on-time delivery. 100% online, quick processing",
    image: "",
    subHeading: "",
  };
  const RegisterStepsData = {
    heading: "Steps to Register",
    title: "Registration steps",
    description: "",
    steps: [
      {
        title: "Consult with Our Experts",
        description: "Share your requirements with our team for personalized guidance.",
        image: "",
      },
      {
        title: "Submit the Required Documents",
        description: "Provide all necessary documentation to proceed smoothly.",
        image: "",
      },
      {
        title: "Receive Your UDYAM Registration",
        description: "Complete the process and obtain your UDYAM certificate",
        image: "",
      },
    ],
    meta: "Your Udyam Registration Certificate",
  };

  const AdvantagesData: AdvantagesData = {
    title: "",
    heading: "Advantages of Udyam Registration Certificate",
    description:
      "Udyam Registration is a mandatory step for Indian micro, small, and medium enterprises seeking government support. It's a simple online process that can be completed in minutes.",
    image: dentist_section_img,

    advantages: [
      {
        title: "Financial Benefits",
        description:
          "Udyam-registered MSMEs enjoy easier access to loans, credit, government subsidies, and tax benefits.",
        icon: <svg>...</svg>,
      },
      {
        title: "Business Opportunities",
        description:
          " Udyam registration provides priority in government procurement, simplifies compliance, and increases access to industrial licenses, market linkages, and export opportunities.",
        icon: <svg>...</svg>,
      },
      {
        title: "Legal Protection",
        description:
          "Udyam-registered MSMEs benefit from protection against delayed payments and can get reimbursement of ISO certification fees.",
        icon: <svg>...</svg>,
      },
      {
        title: "Brand and Credibility",
        description:
          " Udyam registration enhances brand image, improves credibility among investors and customers, and simplifies compliance requirements.",
        icon: <svg>...</svg>,
      },
      {
        title: "Legal Protection",
        description:
          " Udyam-registered MSMEs have access to government forums, networks, entrepreneurial support, and training programs.",
        icon: <svg>...</svg>,
      },
    ],
  };

  const AllInOneData = {
    title: "",
    heading: "Udyam Registration Certificate",
    image: save_time_money_section,
    description:
      "Udyam Registration is an online registration process for micro, small, and medium enterprises (MSMEs) in India. It is a mandatory process for MSMEs that want to avail of government benefits and subsidies.",
  };
  const OverviewData: OverviewData = {
    heading: "Udyam Registration",
    meta: "Overview",
    introduction: {
      heading: "Udyam Registration: A Boost for India's MSMEs",
      description: [
        "Indian MSMEs, crucial to our economy, often face challenges in growing their businesses. To address this, the government launched the Udyam scheme. This new classification categorizes all MSMEs as 'Udyam' and requires them to register to access government support.",
        "Udyam Registration, introduced by the Ministry of Micro, Small, and Medium Enterprises, simplifies the process of categorizing MSMEs and ensures they receive the benefits they deserve. By registering, MSMEs seamlessly integrate with government databases like PAN, GST, and IT, making it easier to access support programs and opportunities.",
      ],
    },
    advantagesInfo: {
      heading: "Advantages ",
      meta: "of Udyam Registration",
      description:
        "Udyam Registration is an online registration process for micro, small, and medium enterprises (MSMEs) in India.",
      advantages: [
        {
          imageUrl: "",
          heading: "Financial Benefits",
          details:
            "Access to collateral-free loans, government subsidies, and tax benefits.",
        },
        {
          imageUrl: "",
          heading: "Business Opportunities ",
          details:
            "Priority in government procurement, simplified compliance, and access to industrial licenses.",
        },
        {
          imageUrl: "",
          heading: "Legal Protection ",
          details:
            "Protection against delayed payments and reimbursement of ISO certification fees.",
        },
        {
          imageUrl: "",
          heading: "Brand and Credibility",
          details:
            "Improved credibility, professional image, and simplified compliance.",
        },
        {
          imageUrl: "",
          heading: "Networking and Support",
          details:
            "Access to government forums, entrepreneurial support, and training programs.",
        },
        {
          imageUrl: "",
          heading: "Market Access",
          details: "Access to market linkages and export opportunities.",
        },
        {
          imageUrl: "",
          heading: "Training and Development",
          details: "Access to free online courses and training programs.",
        },
        {
          imageUrl: "",
          heading: "Government Support",
          details: "Eligibility for various government subsidies and schemes.",
        },
        {
          imageUrl: "",
          heading: "Compliance Simplification",
          details: "Easier compliance requirements for operating legally.",
        },
        {
          imageUrl: "",
          heading: "Entrepreneurial Development",
          details:
            "Access to entrepreneurial support and handholding services.",
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
          start: "Who is eligible for ",
          blueText: "MSME Registration",
          end: "?",
        },
        subHeading: "",
        startingDescription:
          "Any micro, small, or medium enterprise in India can register on the Udyam portal. You'll need your Aadhaar and PAN card.",
        endingDescription:
          "This includes startups, companies, sole proprietorships, partnerships, LLPs, SHGs, co-operatives, trusts, and e-commerce businesses.",
        requiredSteps: [
          {
            heading: "To be eligible, your business must:",
            description: "",
            steps: [
              {
                heading: "",
                description:
                  "Be in manufacturing, services, wholesale, or retail.",
              },
              {
                heading: "",
                description: "Have an annual turnover under ₹250 crores.",
              },
              {
                heading: "",
                description:
                  "Have an investment in plant and machinery under ₹50 crores.",
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
          start: " ",
          blueText: "Documents Required",
          end: " for Udyam Registration Online-",
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
                heading: "Aadhaar Number",
                description:
                  "A valid 12-digit Aadhaar number of the applicant or authorised signatory is mandatory.",
              },
              {
                heading: "PAN Card",
                description:
                  "The Permanent Account Number (PAN) of the business or individual may be required depending on the case.",
              },
              {
                heading: "Business Information",
                description:
                  "This includes the business name, address, type of organisation, and contact information.",
              },
              {
                heading: "Bank Account Details",
                description:
                  "You’ll need to provide your business bank account number and IFSC code.",
              },
              {
                heading: "Investment Details",
                description:
                  "Information regarding the total capital investment in the business, such as machinery, equipment, and other assets.",
              },
              {
                heading: "Industry Classification",
                description:
                  "Specifics related to your business sector and main line of activity.",
              },
              {
                heading: "Employee Information",
                description:
                  "Total number of employees working in the business.",
              },
              {
                heading: "Other Supporting Documents (if applicable)",
                description:
                  "Additional documentation like licenses or certifications may be needed depending on your business type.",
              },
              {
                heading: "Email and Mobile Number",
                description:
                  "A valid email address and phone number for receiving confirmations and further communications.",
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
        heading:{
          start:"How to ",
          blueText:"Register MSME ",
          end:"Using Udyam Registration Portal?"
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "By following these simplified steps, businesses can register as an MSME through the Registration Portal and access the associated benefits.",
        requiredSteps:[
          {
            heading: "",
            description: "",
            steps: [
              {
                heading:"",
                description:"Visit the official Udyam Portal."
              },
              {
                heading:"",
                description:"Click on 'Udyam Registration' for new users or 'Re-Register' for existing MSMEs. "
              },
              {
                heading:"",
                description:"Input the 12-digit Aadhaar number and validate it. "
              },
              {
                heading:"",
                description:"Fill in personal and business details, including name, type, address, and investment. "
              },
              {
                heading:"",
                description:"Select the appropriate industry code"
              },
              {
                heading:"",
                description:"Provide bank account details and attach any required documents. "
              },
              {
                heading:"",
                description:"Review all details for accuracy and accept the declaration "
              },
              {
                heading:"",
                description:"Click on 'Submit' to complete the application. "
              },
              {
                heading:"",
                description:"Receive the Registration Number (URN) and e-certificate via email. "
              },
              {
                heading:"",
                description:"Print or save the Registration Certificate "
              },
            ]
          }
        ]

      }
    ],
  };
  const FAQsData ={
    title:"FAQs",
    heading:"What Ensurekar offer you?",
    description:"",
    FAQs :[
      {
        question: "Who can apply for Udyam registration?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
      {
        question: "Who is eligible for Udyam Aadhaar?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
      {
        question: "What are the Uses of Udyam certificates?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
      {
        question: "How can I download my Udyam certificate?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
      {
        question: "What is the last date of Udyam Aadhar registration?",
        answer: "Ensurekar offers a comprehensive suite of services, including accounting, payroll processing, tax preparation, financial advisory, and global payroll solutions."
      },
    ],
    imageUrl: faq_illus
  }
  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for Udaym Registration?",
    description: "",
    elements: [
      {
        heading: "Expert Guidance",
        description: "Ensurekar offers personalized consultation to understand your unique business needs and streamline the Udyam registration process.",
        imageUrl: "",
      },
      { heading: "Hassle-Free Documentation", description: "We ensure all required documents are accurately collected and submitted, saving you time and effort.", imageUrl: "" },
      { heading: "Quick & Reliable Registration", description: "With our efficient services, you can swiftly receive your Udyam registration and start enjoying the benefits.", imageUrl: "" },
    ],
  };
  return (
    <div>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <ServiceAdvantages AdvantagesData={AdvantagesData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData}  />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSection />
    </div>
  );
};

export default UdyamRegistration;
