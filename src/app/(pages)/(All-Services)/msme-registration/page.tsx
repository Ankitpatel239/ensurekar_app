"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from "../../../images/faq_illus.png";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";



const MSMERegistration = () => {

  const BreadcrumbData = {
    title: "MSME Registration",
    heading: "MSME Registration Certificate ",
    subHeading: "MSME / UDYAM Registration || Apply MSME/UDYAM Registration online",
    description:
      "The fastest turnaround time in India, with the guarantee of document upload to the government portal within 24 hours or a full refund.",
    image: "",
    bottomHeading:'Complete Online Process Expert Support Simple and Cost-Effective'
  };

  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "Steps to Register your",
    meta: "MSME Registration  Certificate",
    description: "",
    steps: [
      {title: "Create you're account and submit details  ",description:""},
      {title: "consult with our experts",description:""},
      {title: "Get Your Certificate",description:""},
    ],
    aboutSteps: [
      {
        title: "Submit Your Details",
        description:
          "Fill in your basic information and business details on our platform to kick-start the registration process.",
      },
      {
        title: "Expert Assistance & Documentation",
        description:
          "Our team will assist you ",
      },
      {
        title: "Get Your Certificate",
        description:"Get your Digital Signature in Just a day",
      },
    ],
    footerMessage:"Simple, quick, and hassle-free!"
  };

  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Advantages",
      meta: "of MSME Registration",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Access the Udyam Registration Portal",
          details:
            "Visit the official Udyam Registration portal to begin the MSME registration process.",
        },
        {
          imageUrl: "",
          heading: "Self-Declaration",
          details: "Provide essential enterprise details such as business name, type, address, and ownership through self-declaration.",
        },
        {
          imageUrl: "",
          heading: "Aadhaar Verification",
          details: "Verify your Aadhaar number using OTP authentication, as Aadhaar is the primary identification for registration.",
        },
        {
          imageUrl: "",
          heading: "PAN & GSTIN Details",
          details: "If applicable, supply PAN and GSTIN details for tax identification purposes during registration.",
        },
        {
          imageUrl: "",
          heading: "Classification & Turnover",
          details: "Enterprises are classified as Micro, Small, or Medium based on their investment and turnover figures.",
        },
        {
          imageUrl: "",
          heading: "Dynamic QR Code Certificate",
          details: "Upon successful registration, receive an e-certificate with a dynamic QR code containing enterprise details.",
        },
        {
          imageUrl: "",
          heading: "Dynamic QR Code Certificate",
          details: "Udyam Registration is a one-time process with no need for renewal.",
        },
        {
          imageUrl: "",
          heading: "Integration with Tax Systems",
          details: "The system is linked with Income Tax and GST databases to fetch investment and turnover data automatically.",
        },
        {
          imageUrl: "",
          heading: "Re-registration for Existing Registrants",
          details: "Enterprises with prior EM-II or UAM registrations need to re-register under the Udyam system.",
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
          blueText: "MSME Registration ",
          end: "Eligibility",
        },
        subHeading: "",
        startingDescription: "All manufacturing, service industries, wholesale, and retail trade that fulfil the revised MSME classification criteria of annual turnover and investment can apply for MSME registration. Thus, the MSME registration eligibility depends on an entity's annual turnover and investment. The following entities are eligible for MSME registration",
        endingDescription: "",
        requiredSteps: [
          {
            heading:"",
            description: "",
            steps: [
              {
                heading: "",
                description:"Individuals, startups, business owners, and entrepreneurs",
              },
              {
                heading: "",
                description:"Private and public limited companies",
              },
              { heading: "", description: "Sole proprietorship" },
              { heading: "", description: "Partnership firm" },
              { heading: "", description: "Limited Liability Partnerships (LLPs)" },
              { heading: "", description: "Self Help Groups (SHGs)" },
              { heading: "", description: "Co-operative societies" },
              { heading: "", description: "Trusts" },
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
          end: "for MSME Registration",
        },
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {heading: "",description: "",
            steps: [
              { heading: "",description:"Business address details",},
              { heading: "",description:"Description of primary business activity",},
              { heading: "",description:"6 Investment information (plant and equipment)",},
              { heading: "",description:"Turnover details (as per the new MSME definition)",},
              { heading: "",description:"Aadhaar number",},
              { heading: "",description:"PAN number",},
              { heading: "",description:"Bank account details",},
              { heading: "",description:"Partnership deed (if applicable)",},
              { heading: "",description:"Copies of licenses and invoices for purchased machinery",},
            
            ],
          },
        ],
      },
    ],
  };

  const WhyEnsurekar = {
    heading: "Why Choose Ensurekar for MSME Registration?",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description: "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements",
        imageUrl: "",
      },
      { heading: "Hassle-Free & Fast Service", description: "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.", imageUrl: "" },
      { heading: "Transparent & Affordable", description: "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.", imageUrl: "" },
    ],
  };

  const AdvantagesData = {
    title: "Benefits",
    heading: "MSME Registration Certificate",
    description:
      "MSME Registration and UDYAM registration have many benefits",
    image: dentist_section_img,
    advantages: [
      {
        title: "Access to Government Schemes and Subsidies",
        description:
          "MSMEs can benefit from various government initiatives, including financial support, tax reliefs, and preferential procurement.",
        icon: <svg>...</svg>,
      },
      {
        title: "Easier Access to Credit",
        description:
          "MSME-registered businesses can secure loans more easily and at lower interest rates from banks and financial institutions.",
        icon: <svg>...</svg>,
      },
      {
        title: "Intellectual Property Protection",
        description:
          "MSME registration helps protect trademarks, patents, and copyrights, ensuring legal security for a business's intellectual assets.",
        icon: <svg>...</svg>,
      },
      {
        title: "Participation in Government Contracts",
        description:
          "MSMEs gain eligibility to participate in government tenders and contracts, offering growth opportunities in the public sector.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "MSME Registration",
    image: save_time_money_section,
    description:
      ["  In India, the government extends a valuable opportunity to Micro, Small, and Medium Enterprises (MSMEs) through the provision of MSME registration. This special registration serves as a gateway to a domain of benefits carefully curated by the government to foster the establishment and growth of these vital sectors. Often regarded as the backbone of the nation's economy, MSMEs are affectionately known as Small Scale Industries (SSIs)."],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "MSME/UDYAM Registration FAQs",
    description: "",
    FAQs: [
      {question: "What is the Ministry of MSME's role?",answer:"NA",},
      {question: "Can you explain what Udyog Aadhar is?",answer:"NA",},
      {question: "Why is the term 'Micro' used in the context of MSME?",answer:"NA",},
      {question: "How does the Ministry of Micro differ from the Ministry of MSME?",answer:"NA",},
      {question: "I saw a mention of 'fees for Udyam registration file.' Is there a cost involved?",answer:"NA",},
      {question: "Are any documents needed for the self-declaration during Udyam Registration?",answer:"NA",},
      {question: " What advantages does Udyog Aadhaar registration offer to MSMEs?",answer:"NA",},
      {question: "I've heard about 'MSME classification.' How was it determined in the past?",answer:"NA",},
      {question: "Why is the Aadhaar number important for MSME registration?",answer:"NA",},
      {question: "What is the importance of the 'Udyog Aadhaar number'?",answer:"NA",},
      {question: "Could you provide more information about the 'MSME sector' in India?",answer:"NA",},
   
    ],
    imageUrl: faq_illus,
  };

  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Discover the journey behind EnsureKar's success and how we’ve helped countless businesses thrive. Explore our stories of innovation, growth, and dedication.",
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
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <ServiceOverview OverviewData={OverviewData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
      <TestimonialSectionAllServices TestimonialData={TestimonialData} />
    </div>
  );
};

export default MSMERegistration;
