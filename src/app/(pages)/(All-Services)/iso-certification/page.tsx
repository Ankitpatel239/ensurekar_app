"use client";

import React from "react";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import CompaniesAct from "@/app/components/Section/Companies-Act";
import Image, { StaticImageData } from "next/image";
import dentist_section_img from "../../../images/dentist_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import faq_illus from "../../../images/faq_illus.png";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import ServiceOverview from "@/app/components/Section/Service-Overview";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";

interface WhyEnsurekar {
  heading: string;
  description: string;
  elements: { heading: string; description: string; imageUrl: string }[];
}

import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import TestimonialSectionAllServices from "@/app/components/Section/Testimonial-Section-All-Services";
import testimonial10 from "../../../images/testimonial10.png";
import testimonial9 from "../../../images/testimonial9.png";
import testimonial7 from "../../../images/testimonial7.png";
import testimonial8 from "../../../images/testimonial8.png";
import testimonial6 from "../../../images/testimonial6.png";

interface AdvantagesData {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  advantages: { title: string; description: string; icon: React.ReactNode }[];
}

const isoCertification = () => {
  const BreadcrumbData = {
    title: "ISO Certificate",
    heading: "ISO Certificate",
    subHeading:
      "ISO Certification online || Obtain ISO Certification Online in India",
    description:
      "Experience hassle-free ISO certification online with dedicated support from our expert consultants.",
    image: "",
    bottomHeading: "Get your ISO certification online in 3 simple steps",
  };

  const RegisterStepsData = {
    title: "ISO Certificate",
    heading: "Steps to Register your",
    meta: "ISO Certificate",
    description: "",
    steps: [
      { title: "Create you're account and submit details   ", description: "" },
      { title: "Consult with our experts   ", description: "" },
      { title: "Get Your Certificate", description: "" },
    ],
    aboutSteps: [
      {
        title: "Submit Your Details",
        description:
          "Fill in your basic information and business details on our platform to kick-start the registration process.",
      },
      {
        title: "Expert Assistance & Documentation",
        description: "Our team will assist you ",
      },
      {
        title: "Get Your Certificate",
        description: "Get your Digital Signature in Just a day",
      },
    ],
    footerMessage: "Simple, quick, and hassle-free!",
  };

  const OverviewData = {
    heading: "",
    meta: "",
    introduction: {
      heading: "",
      description: [],
    },
    advantagesInfo: {
      heading: "Types ",
      meta: "of ISO Certification",
      description: "",
      advantages: [
        {
          imageUrl: "",
          heading: "Quality Management Systems (QMS)",
          details: "ISO 9001:2015 - Quality Management Systems",
        },
        {
          imageUrl: "",
          heading: "Environmental Management Systems (EMS)",
          details: "ISO 14001:2015 - Environmental Management Systems",
        },
        {
          imageUrl: "",
          heading: "Occupational Health and Safety Management Systems (OHSMS)",
          details:
            "ISO 45001:2018 - Occupational Health and Safety Management Systems",
        },
        {
          imageUrl: "",
          heading: "Information Security Management Systems (ISMS)",
          details:
            "ISO/IEC 27001:2013 - Information Security Management Systems",
        },
        {
          imageUrl: "",
          heading: "Energy Management Systems (EnMS)",
          details: "ISO 50001:2018 - Energy Management Systems",
        },
        {
          imageUrl: "",
          heading: "Food Safety Management Systems (FSMS)",
          details: "ISO 22000:2018 - Food Safety Management Systems",
        },
        {
          imageUrl: "",
          heading: "Social Responsibility",
          details: "ISO 26000:2010 - Social Responsibility",
        },
        {
          imageUrl: "",
          heading: "Risk Management",
          details: "ISO 31000:2018 - Risk Management",
        },
        {
          imageUrl: "",
          heading: "Medical Devices",
          details: "ISO 13485:2016 - Medical Devices",
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
          blueText: "ISO certification requirements ",
          end: "vary by standard but generally include: ",
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
                heading: "Quality Management System (QMS)",
                description:
                  " Implement a QMS that meets the relevant ISO standard.",
              },
              {
                heading: "Documentation",
                description:
                  "Maintain records of processes and procedures related to the QMS.",
              },
              {
                heading: "Continuous Improvement",
                description:
                  "Develop a management system focused on ongoing enhancement.",
              },
              {
                heading: "Employee Training",
                description:
                  "Train staff on the QMS and clarify their responsibilities.",
              },
              {
                heading: "Compliance",
                description:
                  "Ensure adherence to applicable legal and regulatory requirements",
              },
              {
                heading: "Effectiveness Monitoring",
                description:
                  ": Evaluate the QMS through internal audits and management reviews.",
              },
              {
                heading: "Addressing Non-Conformities",
                description:
                  "Identify and resolve non-conformities with corrective and preventive actions.",
              },
              {
                heading: "Record Keeping",
                description:
                  "Keep records related to the QMS and ensure proper document control.",
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
          blueText: "Documents Needed ",
          end: "for ISO Registration",
        },
        meta: "of Digital Signature Registration Certificate",
        subHeading: "",
        startingDescription: "",
        endingDescription: "",
        requiredSteps: [
          {
            heading: "",
            description: "",
            steps: [
              { heading: "", description: "Application Form" },
              { heading: "", description: "Scope of Certification" },
              {
                heading: "",
                description: "Quality Management System (QMS) Documentation",
              },
              { heading: "", description: "Records" },
              { heading: "", description: "Minutes from Management Reviews" },
              { heading: "", description: "Internal Audit Reports" },
              {
                heading: "",
                description: "Corrective and Preventive Action (CAPA) Records",
              },
              { heading: "", description: "Organizational Chart" },
              { heading: "", description: "Employee Training Records" },
              { heading: "", description: "Supplier Assessment Reports" },
              { heading: "", description: "Customer Satisfaction Surveys" },
            ],
          },
        ],
      },
    ],
  };

  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for ISO Certification",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };

  const AdvantagesData: AdvantagesData = {
    title: "Benefits ",
    heading: "Advantages of ISO Certification",
    description:
      "ISO certification is a seal of approval from a third-party body that a company or organisation runs to one of the international standards developed and published by the International Organisation for Standardisation (ISO)",
    image: dentist_section_img,
    advantages: [
      {
        title: "Enhanced Customer Trust",
        description:
          " ISO certification demonstrates a commitment to quality, increasing customer confidence and potentially boosting sales and market share.",
        icon: <svg>...</svg>,
      },
      {
        title: "Improved Quality and Efficiency",
        description:
          "Organizations adopting ISO standards often experience better product and service quality, along with streamlined processes that reduce costs and errors, leading to increased productivity.",
        icon: <svg>...</svg>,
      },
      {
        title: "Regulatory Compliance",
        description:
          "ISO certification helps organizations meet relevant regulations, reducing the risk of fines and penalties.",
        icon: <svg>...</svg>,
      },
      {
        title: "Strengthened Brand Reputation",
        description:
          "Being ISO certified serves as a recognized symbol of quality and excellence, enhancing the organization's brand reputation and attracting new customers and partners.",
        icon: <svg>...</svg>,
      },
    ],
  };
  const AllInOneData = {
    title: "",
    heading: "ISO Certificate",
    image: save_time_money_section,
    description: [
      "More than 22,000 ISO standards have been published across various fields, such as quality management, environmental management, food safety, information security, and social responsibility. While ISO certification is not mandatory, it serves as a valuable means for organizations to showcase their dedication to quality, safety, and efficiency.",
    ],
  };
  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      { question: "What is ISO certification?", answer: "NA" },
      {
        question: "What is the validity period of ISO certification?",
        answer: "NA",
      },
      { question: "Is ISO certification available in my area?", answer: "NA" },
      {
        question: "How does international standardization benefit businesses?",
        answer: "NA",
      },
      {
        question: "What distinguishes ISO certification from accreditation?",
        answer: "NA",
      },
      {
        question: "Is renewal necessary for my ISO certificate?",
        answer: "NA",
      },
      {
        question:
          "How do the various accreditation bodies for ISO certification differ?",
        answer: "NA",
      },
      {
        question: "Who is responsible for issuing ISO certification?",
        answer: "NA",
      },
      {
        question: "What does our ISO Registration Package include?",
        answer: "NA",
      },
      {
        question: "Will I receive a certificate during the pre-audit phase?",
        answer: "NA",
      },
      { question: "Can I select any ISO accreditation?", answer: "NA" },
    ],
    imageUrl: faq_illus,
  };

  const TestimonialData = {
    title: "Testimonials",
    heading: "Ensurekar Customer Stories",
    description:
      "Startups thrive with Ensurekar. Their flexible payroll solutions have been instrumental in our journey, providing the support.",
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

export default isoCertification;
